import { Schema, model } from "mongoose";
import type { UserType } from "../types";

const schema = new Schema<UserType>({
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<UserType>("User", schema);
