const production = true; // set it to true when deploy to server

export const websocketUrl = production
  ? "https://autoacuity.net:5000"
  : "http://localhost:5000";

export const actionUrl = production
  ? "https://autoacuity.net"
  : "http://localhost:5000";
