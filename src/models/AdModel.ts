import { Schema, model } from "mongoose";
import type { AdType } from "../types";
import { AD_STATUSES } from "../constants";

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
  },
  status: {
    type: String,
    enum: [AD_STATUSES.APPROVED, AD_STATUSES.PENDING, AD_STATUSES.REJECTED],
  },
  owner: {
    type: Boolean,
    default: false,
  },
  isFavorite: Boolean,
});

export default model<AdType>("Ad", schema);
