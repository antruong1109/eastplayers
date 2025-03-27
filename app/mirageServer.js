import { createServer } from "miragejs";
import authData from "./assets/json/authData.json";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/auth", () => {
        return authData;
      });
    },
  });
}
