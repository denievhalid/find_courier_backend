import _ from "lodash";
import type { NextFunction, Request, Response } from "express";
import AdService from "../services/AdService";
import { body, validationResult } from "express-validator";

class AdController {
  async create(req: Request, res: Response) {
    const {
      body: { title, price, weight },
      files,
    } = req;

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // @ts-ignore
      const images = files?.map((file) => file.path);

      // @ts-ignore
      await AdService.create({
        title,
        price,
        weight,
        images,
      });
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json(err);
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
      return res.status(200).json({ data });
    } catch (err) {
      console.log(err);
    }
  }

  async updateStatus(req: Request, res: Response) {
    const {
      body: { id, status },
    } = req;
    try {
      const doc = await AdService.update(req.params.id, { status });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
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
