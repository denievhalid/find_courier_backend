import AdModel from "../models/AdModel";
import { AdType } from "../types";
import { FilterQuery, PipelineStage, Types, UpdateQuery } from "mongoose";
import { AD_STATUSES } from "../constants";

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

  getList({
    match,
    set,
  }: {
    match: PipelineStage.Match;
    set?: PipelineStage.Set;
  }) {
    let pipeline: PipelineStage[] = [];

    if (match) {
      pipeline.push(match);
    }

    pipeline.push(
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
      }
    );

    if (set) {
      pipeline.push(set);
    }

    console.log(pipeline);

    return AdModel.aggregate(pipeline);
  }

  delete(id: string) {
    //return AdModel.findByIdAndDelete(id);
    return AdModel.deleteMany();
  }
}

export default new AdService<AdType>();
