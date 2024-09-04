import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import morgan from "morgan";
import { skip } from "node:test";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:5173",
    };

    app.use(
      morgan("dev", {
        skip: function (req, res) {
          return req.method === "OPTIONS";
        },
      })
    );
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
