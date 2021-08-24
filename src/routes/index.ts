import * as winston from "winston";
import { Express, Request, Response } from "express";

import auth from "./auth";

export default (app: Express) => {
  winston.log("info", "--> Initialisations des routes");

  app.get("/api", (_: Request, res: Response) =>
    res.status(200).send({
      message: "server is running",
    })
  );

  app.use("/auth", [auth]);

  app.all("*", (_: Request, res: Response) => res.boom.notFound());
};
