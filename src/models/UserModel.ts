import { Schema, model } from "mongoose";
import type { UserType } from "../types";

const schema = new Schema<UserType>({
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  isNew: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default model<UserType>("User", schema);
