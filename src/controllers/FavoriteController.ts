import type { Request, Response } from "express";
import FavoriteService from "../services/FavoriteService";
import { AdType } from "../types";

class FavoriteController {
  add() {}

  async get(req: Request, res: Response) {
    try {
      const filter = {
        // @ts-ignore
        user: req.user?._id,
      };

      const data: AdType[] = await FavoriteService.get(filter);

      return res.status(200).json({ success: true, data });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async toggle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const payload = {
        id,
        // @ts-ignore
        user: req.user,
      };

      const data = await FavoriteService.toggle(payload);
      console.log(data);
      return res.status(200).json({ success: true, ...data });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async delete(req: Request, res: Response) {
    const {
      params: { id },
    } = req;

    try {
      const payload = {
        id,
        // @ts-ignore
        user: req.user?._id,
      };

      await FavoriteService.deleteById(payload);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new FavoriteController();
