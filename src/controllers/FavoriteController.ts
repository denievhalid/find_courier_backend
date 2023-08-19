import type { Request, Response } from "express";
import FavoriteService from "../services/FavoriteService";

class FavoriteController {
  add() {}

  get() {}

  async toggle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await FavoriteService.toggle(id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  remove() {}
}

export default new FavoriteController();
