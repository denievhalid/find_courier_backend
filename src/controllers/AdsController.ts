import _ from "lodash";
import type { NextFunction, Request, Response } from "express";
import AdService from "../services/AdService";

class AdsController {
  async createOrder(req: Request, res: Response) {
    try {
      await AdService.create(req.body);
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const data = await AdService.findOne(req.params.id);
      return res.status(200).json(data);
    } catch (err) {}
  }

  async getList(req: Request, res: Response) {
    const { from, to, date } = req.query;

    try {
      const data = await AdService.getList({ from, to, date });
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AdsController();
