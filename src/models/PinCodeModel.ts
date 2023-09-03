import { Schema, model } from "mongoose";
import type { PinCodeType } from "../types";

const schema = new Schema<PinCodeType>({
  deadline: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

export default model<PinCodeType>("PinCode", schema);
