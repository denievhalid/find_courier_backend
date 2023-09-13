import { Request, Response } from "express";

class DeliveryController {
  async getList(req: Request, res: Response) {
    try {
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new DeliveryController();
