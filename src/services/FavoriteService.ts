import FavoriteModel from "../models/FavoriteModel";

class FavoriteService<T> {
  create() {}

  get() {
    return FavoriteModel.aggregate([
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

  async toggle(id: string) {
    try {
      const item = await FavoriteModel.findOne({ ad: id });

      if (item) {
        await FavoriteModel.findOneAndRemove({ ad: id });

        return {
          isFavorite: false,
        };
      }

      await FavoriteModel.create({ ad: id });

      return {
        isFavorite: true,
      };
    } catch (err) {}
  }

  deleteById(id: string) {
    return FavoriteModel.findByIdAndRemove(id);
  }
}

export default new FavoriteService();
