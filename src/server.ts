import { config } from "dotenv";
config();

import express, { Express } from "express";
import * as winston from "winston";
import boom from "express-boom";
import morgan from "morgan";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import routes from "./routes";

const PORT = process.env.SERVER_PORT || 3333;

export class Server {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(cors({ optionsSuccessStatus: 200 }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(boom());
    this.app.use(morgan("combined"));

    this.app.listen(PORT, () => {
      winston.log(
        "info",
        `--> Server successfully started at http://localhost:${PORT}`
      );
    });

    routes(this.app);
  }
}

new Server();
