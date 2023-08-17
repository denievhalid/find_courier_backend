import _ from "lodash";
import type { NextFunction, Request, Response } from "express";
import AdService from "../services/AdService";

class AdController {
  async create(req: Request, res: Response) {
    try {
      await AdService.create(req.body);
      return res.sendStatus(201);
    } catch (err) {
      return res.sendStatus(400);
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
      const data = await AdService.getList();
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const data = await AdService.delete(req.params.id);
      return res.sendStatus(204);
    } catch (err) {}
  }
}

export default new AdController();