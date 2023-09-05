import { Schema, model } from "mongoose";
import type { UserType } from "../types";

const schema = new Schema<UserType>({
  avatar: String,
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    //required: true,
  },
  gender: {
    type: String,
    enum: ["f", "m"],
    required: true,
  },
});

export default model<UserType>("User", schema);
