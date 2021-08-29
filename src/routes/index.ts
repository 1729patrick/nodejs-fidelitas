import * as winston from "winston";
import { Express, Request, Response } from "express";
import { errors } from "celebrate";

import authMiddleware from "../middlewares/auth";

import auth from "./auth";
import restaurants from "./restaurants";
import products from "./products";
import files from "./files";

export default (app: Express) => {
  winston.log("info", "--> Initialisations des routes");

  app.get("/api", (_: Request, res: Response) =>
    // res.status(200).send({
    //   message: "server is running",
    // })

    res.redirect(
      "https://storage.googleapis.com/fidelitas_products/e5861a3ee72c91db2d65457a7fcf327f583e0b65f7a3694322d7af86bd7dd31d5ef50a1a3220f0d13cd976457b5ef7daf4777db47b0cb025c7d286bba59236d8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=server%40fidelitas-315620.iam.gserviceaccount.com%2F20210829%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20210829T185144Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=2a82de6c929f873662997fc64780e0e702e2416bb80333d8de8694ac379af5b9388f0838c1999384f18ebe95b5495216f736903bb6b02da508c5cab8932dc0323f1d3537ee2c4040fe4dfd6a7a3d13c6ffc546f88024d622b070c1d20a20a60e709c0cb920d4812acd17218ec5b271c16ef99ef4db9fe127a8b3c419e567127a6449febb5c1a6bfc090ee545ef300d33497a8d745fb48d9825f041ac56aec5405c955c1d1646441646f0d2178019c2f1005535f73d60302546e1ac315b728de734a3b5d7906a8273ce634552fbb76e0c2cbf8f95edbdffd45ea2c5e97d675c798cdad80d8ade31db55dcab5ffcb42c2652fb0217b7e100415bbf7b4753652fef"
    )
  );

  app.use("/auth", [auth]);

  app.use("/files", [files]);

  app.use(authMiddleware);
  app.use("/restaurants", [restaurants]);
  app.use("/products", [products]);

  app.use(errors());
  app.all("*", (_: Request, res: Response) => res.boom.notFound());
};
