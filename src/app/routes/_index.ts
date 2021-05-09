import * as winston from "winston";
import { Express, Request, Response } from "express";
import AuthRoutes from "./auth";

export default (app: Express) => {
  winston.log("info", "--> Initialisations des routes");

  app.get("/api", (req: Request, res: Response) =>
    res.status(200).send({
      message: "server is running!",
    })
  );

  AuthRoutes(app);

  app.all("*", (_: Request, res: Response) => res.boom.notFound());
};
