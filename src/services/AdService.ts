import AdModel from "../models/AdModel";
import { AdType } from "../types";
import { FilterQuery, Types } from "mongoose";

class AdService<T> {
  create(payload: T) {
    return AdModel.create(payload);
  }

  findOne(id: string) {
    return AdModel.findById(id)
      .populate({
        path: "from",
      })
      .populate({
        path: "to",
      });
  }

  getList(filter: T) {
    return AdModel.find({ from: filter.from, to: filter.to });
  }
}

export default new AdService<AdType>();
