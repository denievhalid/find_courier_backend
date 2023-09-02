import { Schema, model } from "mongoose";
import type { AdType, VerifyType } from "../types";

const schema = new Schema<VerifyType>({
  deadline: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model<VerifyType>("Verify", schema);
