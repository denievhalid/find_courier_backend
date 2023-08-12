import AdModel from "../models/AdModel";
import { AdType } from "../types";

class AdService<T> {
  create(payload: T) {
    return AdModel.create(payload);
  }

  getList() {
    return AdModel.find();
  }
}

export default new AdService<AdType>();
