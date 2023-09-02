import { Schema, model } from "mongoose";
import type { RouteType } from "../types";

const schema = new Schema<RouteType>({
  city_name: {
    type: String,
    required: true,
  },
  city_kladr: {
    type: Number,
    required: true,
    unique: true,
  },
});

export default model<RouteType>("Route", schema);
