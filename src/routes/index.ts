import * as winston from "winston";
import { Express, Request, Response } from "express";
import { errors } from "celebrate";

import authMiddleware from "../middlewares/auth";

import auth from "./auth";
import restaurant from "./restaurant";

export default (app: Express) => {
  winston.log("info", "--> Initialisations des routes");

  app.get("/api", (_: Request, res: Response) =>
    res.status(200).send({
      message: "server is running",
    })
  );

  app.use("/auth", [auth]);

  app.use(authMiddleware);
  app.use("/restaurant", [restaurant]);

  app.use(errors());
  app.all("*", (_: Request, res: Response) => res.boom.notFound());
};
