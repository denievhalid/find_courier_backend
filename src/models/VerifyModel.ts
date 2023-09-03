import { Schema, model } from "mongoose";
import type { AdType, VerifyType } from "../types";

const schema = new Schema<VerifyType>({
  deadline: {
    type: Date,
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

schema.statics.getPublicFields = () => {
  console.log(111);
};

export default model<VerifyType>("Verify", schema);
