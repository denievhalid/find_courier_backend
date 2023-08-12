import AdModel from "../models/AdModel";
import { AdType } from "../types";

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

  getList() {
    return AdModel.find()
      .populate({
        path: "from",
      })
      .populate({
        path: "to",
      });
  }
}

export default new AdService<AdType>();
