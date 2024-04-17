import { Schema, Document, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Catgory = models.Category || model("Category", CategorySchema);

export default Catgory;
