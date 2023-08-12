import { Schema, model } from "mongoose";
import type { LocationType } from "../types";

const schema = new Schema<LocationType>({
  city_name: {
    type: String,
    required: true,
  },
  city_kladr_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

export default model<LocationType>("Location", schema);
