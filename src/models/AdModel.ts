import { Schema, model } from "mongoose";
import type { AdType } from "../types";

const schema = new Schema<AdType>({
  title: {
    type: String,
    required: true,
  },
  cover: {
    uri: String,
  },
  images: [
    {
      type: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  route: {
    from: {
      city_name: String,
      city_kladr: String,
    },
    to: {
      city_name: String,
      city_kladr: String,
    },
  },
  weight: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
  },
});

export default model<AdType>("Ad", schema);
