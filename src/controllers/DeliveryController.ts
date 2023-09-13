import { Request, Response } from "express";
import DeliveryService from "../services/DeliveryService";

class DeliveryController {
  async getList(req: Request, res: Response) {
    // @ts-ignore
    const { user } = req;

    try {
      const docs = await DeliveryService.getByUserId(user._id);

      return res.status(200).json({ data: docs, success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new DeliveryController();
