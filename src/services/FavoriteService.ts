import FavoriteModel from "../models/FavoriteModel";
import type { FilterQuery } from "mongoose";
import { UserType } from "../types";

class FavoriteService<T> {
  create() {}

  get({ user }: FilterQuery<T>) {
    return FavoriteModel.aggregate([
      {
        $match: {
          $expr: {
            //$eq: ["$user", { $toObjectId: user }],
          },
        },
      },
      {
        $lookup: {
          from: "ads",
          localField: "ad",
          foreignField: "_id",
          as: "ad",
        },
      },
      { $unwind: "$ad" },
      {
        $addFields: {
          ad: {
            favoriteId: "$_id",
            isFavorite: true,
          },
        },
      },
      { $replaceRoot: { newRoot: "$ad" } },
    ]);
  }

  async toggle({ id: ad, user }: { id: string; user: UserType }) {
    try {
      const item = await FavoriteModel.findOne({ ad });

      if (item) {
        await FavoriteModel.findOneAndRemove({ ad });

        return {
          isFavorite: false,
        };
      }

      await FavoriteModel.create({ ad, user });

      return {
        isFavorite: true,
      };
    } catch (error) {
      console.log("error");
      return {
        isFavorite: false,
      };
    }
  }

  deleteById({ id, user }: { id: string; user: UserType }) {
    return FavoriteModel.findOneAndRemove({ ad: id, user });
  }
}

export default new FavoriteService();
