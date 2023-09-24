import AdModel from "../models/AdModel";
import { AdType } from "../types";
import { FilterQuery, Types, UpdateQuery } from "mongoose";

class AdService<T> {
  create(payload: T) {
    return AdModel.create(payload);
  }

  update(id: string, update: UpdateQuery<T>) {
    return AdModel.findByIdAndUpdate(id, update);
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
    return AdModel.aggregate([
      {
        $sort: { _id: -1 },
      },
      {
        $limit: 20,
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "favorites",
          localField: "_id",
          foreignField: "ad",
          as: "favorites",
        },
      },
      {
        $set: {
          isFavorite: { $toBool: { $size: "$favorites" } },
          user: { $first: "$user" },
        },
      },
    ]);
  }

  delete(id: string) {
    //return AdModel.findByIdAndDelete(id);
    return AdModel.deleteMany();
  }
}

export default new AdService<AdType>();
