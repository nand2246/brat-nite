import { Application } from "express";
import ingredientsRoutes from "./ingredients.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/ingredients", ingredientsRoutes);
  }
}
