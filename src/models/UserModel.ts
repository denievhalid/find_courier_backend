import { Schema, model } from "mongoose";
import type { UserType } from "../types";

const schema = new Schema<UserType>({
  login: {
    type: Number,
    unique: true,
    required: true,
  },
});

export default model<UserType>("User", schema);
