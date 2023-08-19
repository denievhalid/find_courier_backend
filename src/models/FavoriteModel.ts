import { Schema, model } from "mongoose";
import type { FavoriteType } from "../types";

const schema = new Schema<FavoriteType>({
  ad: {
    type: Schema.Types.ObjectId,
    ref: "Ad",
  },
});

export default model<FavoriteType>("Favorite", schema);
