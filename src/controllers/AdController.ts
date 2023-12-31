import _ from "lodash";
import type { NextFunction, Request, Response } from "express";
import AdService from "../services/AdService";
import { body, validationResult } from "express-validator";
import RouteService from "../services/RouteService";
import { AdType } from "../types";
import { default as mongoose } from "mongoose";
import { AD_STATUSES } from "../constants";

class AdController {
  async create(req: Request, res: Response) {
    let {
      body: { title, price, route, weight },
      files,
    } = req;

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      route = JSON.parse(route);

      // @ts-ignore
      const images = files?.map((file) => file.path);

      const cover = { uri: `https://findcourier.ru/${images[0]}` };

      // @ts-ignore
      const user = req.user;

      // @ts-ignore
      await AdService.create({
        cover,
        title,
        price,
        route,
        weight,
        images,
        user,
        status: AD_STATUSES.PENDING,
      });

      return res.status(201).json({ success: true });
    } catch (error) {
      return res.status(400).json({ error, success: false });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const data = await AdService.findOne(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async getList(req: Request, res: Response) {
    const { from, to, date } = req.query;

    try {
      const data = await AdService.getList({
        match: {
          $match: {
            status: AD_STATUSES.APPROVED,
          },
        },
      });

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async getOwnList(req: Request, res: Response) {
    const { from, to, date } = req.query;

    try {
      const data = await AdService.getList({
        match: {
          $match: {
            $expr: {
              // @ts-ignore
              $eq: ["$user", { $toObjectId: req.user?._id }],
            },
          },
        },
        set: {
          $set: {
            owner: true,
          },
        },
      });

      return res.status(200).json({ data, success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
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
