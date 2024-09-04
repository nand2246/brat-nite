import { Schema, model } from "mongoose";

interface IIngredient {
  name: string;
  volunteer: string;
}

const ingredientSchema = new Schema<IIngredient>({
  name: { type: String, required: true },
  volunteer: { type: String },
});

const Ingredient = model<IIngredient>("Ingredient", ingredientSchema);

export default Ingredient;
