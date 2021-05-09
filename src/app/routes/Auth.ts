import { Express } from "express";
import Auth from "../services/Auth";

export default (app: Express) => {
  app.get("/test", Auth.test);
};
