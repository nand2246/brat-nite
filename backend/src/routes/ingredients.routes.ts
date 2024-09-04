import { Router } from "express";
import Ingredient from "../models/IngredientModel";

class IngredientsRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", async function (req, res) {
      try {
        res.send(await Ingredient.find({}));
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    });

    this.router.post("/assignVolunteer", async function (req, res) {
      const { ingredientId, volunteer } = req.body;
      try {
        await Ingredient.updateOne(
          { _id: ingredientId },
          { $set: { volunteer: volunteer } }
        );

        return res.send(await Ingredient.findById(ingredientId));
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    });
  }
}

export default new IngredientsRoutes().router;
