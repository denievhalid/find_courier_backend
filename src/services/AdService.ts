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

  getList(filter?: T) {
    return AdModel.find();
  }

  delete(id: string) {
    //return AdModel.findByIdAndDelete(id);
    return AdModel.deleteMany();
  }
}

export default new AdService<AdType>();
