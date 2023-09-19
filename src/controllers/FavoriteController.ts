import type { Request, Response } from "express";
import FavoriteService from "../services/FavoriteService";

class FavoriteController {
  add() {}

  async get(req: Request, res: Response) {
    try {
      const result = await FavoriteService.get();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async toggle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await FavoriteService.toggle(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async delete(req: Request, res: Response) {
    const {
      query: { id },
    } = req;

    try {
      await FavoriteService.deleteById(id as string);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new FavoriteController();
