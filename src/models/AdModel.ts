import { Schema, model } from "mongoose";
import type { AdType } from "../types";

const schema = new Schema<AdType>({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      //required: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  route: {
    from: {
      city_name: String,
      //required: true,
    },
    to: {
      city_name: String,
      //required: true,
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
});

export default model<AdType>("Ad", schema);
