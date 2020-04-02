const request = require("supertest");
const server = require("../server");
const session = require("supertest-session");

let testSession = null;
let authenticatedSession;

beforeEach(() => {
  testSession = session(server);
});

describe("Dealer Routes", () => {
  it("Should register dealer", async () => {
    const res = await request(server)
      .post("/api/dealer/register")
      .send({
        dealer_email: "nicholaspatterson55@gmail.com",
        dealer_username: "NPatterson18",
        dealer_password: "HockeyHockey1234!",
        dealer_name: "Ford",
        dealer_street: "1100 Javascript Lane",
        dealer_city: "Javascript",
        dealer_state: "js",
        dealer_country: "USA",
        dealer_zipcode: "16629",
        dealer_type: "dealer"
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("Should log in dealer and get cookie", async () => {
    const res = await testSession.post("/api/dealer/login").send({
      username: "NPatterson18",
      password: "HockeyHockey1234!"
    });
    authenticatedSession = testSession;
    expect(res.status).toBe(201);
  });

  it("should get all dealers in database", async () => {
    const res = await request(server).get("/api/dealer/");
    expect(res.status).toBe(200);
  });

  it("should return dealer with given id", async () => {
    const res = await request(server).get("/api/dealer/1");
    expect(res.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      token: expect.any(String),
      userRole: expect.stringContaining("dealer")
    });
  });

  it("should return an empty array of leads by dealer id", async () => {
    const res = await authenticatedSession
      .get("/api/dealer/all/leads")
      .withCredentials();
    expect(res.status).toBe(200);
  });

  it("should update email address from dealer", async () => {
    const res = await authenticatedSession
      .put("/api/dealer/email/update")
      .withCredentials()
      .send({
        dealer_email: "nicholaspatterson36@gmail.com",
        dealer_password: "HockeyHockey1234!"
      });
    expect(res.status).toBe(201);
  });

  it("should update username from dealer", async () => {
    const res = await authenticatedSession
      .put("/api/dealer/username/update")
      .withCredentials()
      .send({
        dealer_username: "NPatterson22",
        dealer_password: "HockeyHockey1234!"
      });
    expect(res.status).toBe(201);
  });

  it("should update the password from dealer", async () => {
    const res = await authenticatedSession
      .put("/api/dealer/password/update")
      .withCredentials()
      .send({
        current_password: "HockeyHockey1234!",
        new_password: "TestTest1234!",
        confirm_new_password: "TestTest1234!"
      });
    expect(res.status).toBe(201);
  });

  it("should get all dealer notifications based on current session", async () => {
    const res = await authenticatedSession
      .get("/api/dealer/notifications/all")
      .withCredentials();
    expect(res.status).toBe(200);
    expect.arrayContaining(0);
  });

  it("should delete dealer notification based on dealer session", async () => {
    const res = await authenticatedSession
      .del("/api/dealer/remove/notification/1") // No notifications in db
      .withCredentials();
    expect(res.status).toBe(400);
  });

  it("should log the dealer out and destroy cookie", async () => {
    const res = await authenticatedSession
      .get("/api/dealer/logout/user")
      .withCredentials();
    expect(res.status).toBe(200);
    expect.objectContaining({ message: "Thanks for visiting" });
    expect(authenticatedSession.cookies.valueToString).toBe(undefined);
  });
});
