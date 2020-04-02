const request = require("supertest");
const server = require("../server");
const session = require("supertest-session");

let testSession = null;
let authenticatedSession;

beforeEach(() => {
  testSession = session(server);
});

describe("Dealer Routes", () => {
  it("Should register dealer", async done => {
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
    done();
  });

  it("Should log in dealer and get cookie", async done => {
    const res = await testSession.post("/api/dealer/login").send({
      username: "NPatterson18",
      password: "HockeyHockey1234!"
    });
    authenticatedSession = testSession;
    expect(res.status).toBe(201);
    done();
  });

  it("should get all dealers in database", async done => {
    const res = await request(server).get("/api/dealer/");
    expect(res.status).toBe(200);
    done();
  });

  it("should return dealer with given id", async done => {
    const res = await request(server).get("/api/dealer/1");
    expect(res.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      token: expect.any(String),
      userRole: expect.stringContaining("dealer")
    });
    done();
  });

  it("should return an empty array of leads by dealer id", async done => {
    const res = await authenticatedSession
      .get("/api/dealer/all/leads")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should update email address from dealer", async done => {
    const res = await authenticatedSession
      .put("/api/dealer/email/update")
      .withCredentials()
      .send({
        dealer_email: "nicholaspatterson36@gmail.com",
        dealer_password: "HockeyHockey1234!"
      });
    expect(res.status).toBe(201);
    done();
  });

  it("should update username from dealer", async done => {
    const res = await authenticatedSession
      .put("/api/dealer/username/update")
      .withCredentials()
      .send({
        dealer_username: "NPatterson22",
        dealer_password: "HockeyHockey1234!"
      });
    expect(res.status).toBe(201);
    done();
  });

  it("should register salesman for dealer", async done => {
    const res = await authenticatedSession
      .post("/api/sales/register")
      .withCredentials()
      .send({
        salesman_firstname: "Joe",
        salesman_lastname: "Shmoe",
        salesman_username: "joeshmoe123",
        salesman_password: "TestTest123!",
        salesman_email: "joeshmoe@gmail.com"
      });
    expect(res.status).toBe(201);
    done();
  });

  it("should update the password from dealer", async done => {
    const res = await authenticatedSession
      .put("/api/dealer/password/update")
      .withCredentials()
      .send({
        current_password: "HockeyHockey1234!",
        new_password: "TestTest1234!",
        confirm_new_password: "TestTest1234!"
      });
    expect(res.status).toBe(201);
    done();
  });

  it("should get all dealer notifications based on current session", async done => {
    const res = await authenticatedSession
      .get("/api/dealer/notifications/all")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should delete dealer notification based on dealer session", async done => {
    const res = await authenticatedSession
      .del("/api/dealer/remove/notification/1") // No notifications in db
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("add lead for dealer session", async done => {
    const res = await authenticatedSession.post("/api/leads/add").send({
      lead_firstname: "Jack",
      lead_lastname: "Ultra",
      lead_street: "123 Apple Tree St",
      lead_city: "Apples",
      lead_state: "Pa",
      lead_email: "jultra@gmail.com",
      lead_phone: "432-324-5234",
      lead_type: "walk-in",
      salesman_lead: null,
      salesman_id: null
    });
    expect(res.status).toBe(201);
    done();
  });

  it("edit lead for dealer session", async done => {
    const res = await authenticatedSession.put("/api/leads/update/1").send({
      lead_firstname: "John",
      lead_lastname: "Ultra",
      lead_street: "123 Apple Tree St",
      lead_city: "Apples",
      lead_state: "Pa",
      lead_email: "jultra@gmail.com",
      lead_phone: "432-324-5234",
      lead_type: "walk-in",
      salesman_lead: true,
      salesman_id: 1
    });
    expect(res.status).toBe(200);
    done();
  });

  it("should log the dealer out and destroy cookie", async done => {
    const res = await authenticatedSession
      .get("/api/dealer/logout/user")
      .withCredentials();
    expect(res.status).toBe(200);
    expect.objectContaining({ message: "Thanks for visiting" });
    expect(authenticatedSession.cookies.valueToString).toBe(undefined);
    done();
  });
});

describe("Salesman Routes", () => {
  it("should log in salesman", async done => {
    const res = await testSession.post("/api/sales/login").send({
      salesman_username: "joeshmoe123",
      salesman_password: "TestTest123!"
    });
    authenticatedSession = testSession;
    expect(res.status).toBe(201);
    done();
  });

  it("should return all salesmans in database", async done => {
    const res = await authenticatedSession
      .get("/api/sales/salesmans")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should return salesman at given id", async done => {
    const res = await authenticatedSession
      .get("/api/sales/1")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should get all salesmans leads", async done => {
    const res = await authenticatedSession
      .get("/api/sales/all/leads")
      .withCredentials();
    expect(res.status).toBe(200);
    expect.objectContaining({
      warning: "No leads found"
    });
    done();
  });

  it("should get salesman new inventory", async done => {
    const res = await authenticatedSession
      .get("/api/sales/newInventory/all")
      .withCredentials();

    expect(res.body.Dealer.NewInventories).toHaveLength(0); // no inventory right now
    expect(res.status).toBe(200);
    done();
  });

  it("should get salesman used inventory", async done => {
    const res = await authenticatedSession
      .get("/api/sales/usedInventory/all")
      .withCredentials();
    expect(res.status).toBe(200);
    expect(res.body.Dealer.Inventories).toHaveLength(0); // no used inventory right now
    done();
  });

  it("should get all salesman notifications", async done => {
    const res = await authenticatedSession.get(
      "/api/sales/notifications/sales/all"
    );
    expect(res.status).toBe(200);
    done();
  });

  it("should delete salesman notification", async done => {
    const res = await authenticatedSession.del(
      "/api/sales/remove/notification/1"
    );
    expect(res.status).toBe(400); // no notification with id 1 yet
    done();
  });

  it("add lead for salesman session", async done => {
    const res = await authenticatedSession.post("/api/leads/sales/add").send({
      lead_firstname: "Jack",
      lead_lastname: "Ultra",
      lead_street: "123 Apple Tree St",
      lead_city: "Apples",
      lead_state: "Pa",
      lead_email: "jultra@gmail.com",
      lead_phone: "432-324-5234",
      lead_type: "walk-in",
      salesman_lead: true
    });
    expect(res.status).toBe(201);
    done();
  });

  it("should log out salesman and delete cookie value", async done => {
    const res = await authenticatedSession
      .get("/api/sales/logout/salesman")
      .withCredentials();
    expect(res.status).toBe(200);
    expect(authenticatedSession.cookies.valueToString).toBe(undefined);
    expect.objectContaining({
      message: "Thanks for visiting"
    });
    done();
  });
});

describe("New Inventory Routes", () => {
  it("should get all new inventory in database", async done => {
    const res = await request(server)
      .get("/api/newInventory/")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should get inventory by id", async done => {
    const res = await request(server)
      .get("/api/newInventory/1")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });
});

describe("Used Inventory Routes", () => {
  it("should get all used inventory in database", async done => {
    const res = await request(server)
      .get("/api/usedInventory/")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should get used inventory by id", async done => {
    const res = await request(server)
      .get("/api/usedInventory/1")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });
});

describe("Leads Routes", () => {
  it("should get all leads in database", async done => {
    const res = await request(server)
      .get("/api/leads/")
      .withCredentials();
    expect(res.status).toBe(200);
    done();
  });

  it("should get lead by id", async done => {
    const res = await request(server)
      .get("/api/leads/1")
      .withCredentials();
    expect(res.status).toBe(200); // no lead in db
    done();
  });
});
