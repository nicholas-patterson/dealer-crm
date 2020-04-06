const production = true; // set it to true when deploy to server

export const websocketUrl = production
  ? "http://206.189.235.148"
  : "http://localhost:5000";

export const actionUrl = production
  ? "http://206.189.235.148"
  : "http://localhost:5000";
