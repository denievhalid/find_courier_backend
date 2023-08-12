import { Schema, model } from "mongoose";
import type { LocationType } from "../types";

const schema = new Schema<LocationType>({
  city_name: String,
  city_kladr_id: Number,
});

export default model<LocationType>("Location", schema);
