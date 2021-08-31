import * as winston from "winston";
import { Express, Request, Response } from "express";
import { errors } from "celebrate";

import authMiddleware from "../middlewares/auth";

import auth from "./auth";
import restaurants from "./restaurants";
import products from "./products";
import files from "./files";
import achievements from "./achievements";
import addresses from "./addresses";
import user from "./user";

export default (app: Express) => {
  winston.log("info", "--> Initialisations des routes");

  app.get("/api", (_: Request, res: Response) =>
    res.status(200).send({
      message: "server is running",
    })
  );

  app.use("/auth", [auth]);
  app.use("/files", [files]);

  app.use(authMiddleware);
  app.use("/restaurants", [restaurants]);
  app.use("/products", [products]);
  app.use("/achievements", [achievements]);
  app.use("/addresses", [addresses]);
  app.use("/user", [user]);

  app.use(errors());
  app.all("*", (_: Request, res: Response) => res.boom.notFound());
};
