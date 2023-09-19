import type { Request, Response } from "express";
import FavoriteService from "../services/FavoriteService";

class FavoriteController {
  add() {}

  async get(req: Request, res: Response) {
    try {
      const filter = {
        // @ts-ignore
        user: req.user,
      };

      const data = await FavoriteService.get(filter);

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
      await FavoriteService.deleteById(id as string);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new FavoriteController();
