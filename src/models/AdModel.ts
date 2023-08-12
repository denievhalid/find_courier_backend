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
      required: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
});

export default model<AdType>("Ad", schema);
