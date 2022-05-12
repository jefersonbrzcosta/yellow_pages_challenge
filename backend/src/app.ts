import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { NODE_ENV, PORT } from "@config";
import { Routes } from "@interfaces/routes.interface";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3001;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public getServer() {
    return this.app;
  }

  public listen() {
    return this.app.listen(this.port, () =>
      console.log("listening on port " + this.port)
    );
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
