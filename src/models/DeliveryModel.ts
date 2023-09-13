import { Schema, model } from "mongoose";
import type { AdType, DeliveryType } from "../types";

const schema = new Schema<DeliveryType>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  route: {
    from: {
      city_name: String,
    },
    to: {
      city_name: String,
    },
  },
});

export default model<DeliveryType>("Delivery", schema);
