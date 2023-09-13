import type { Request, Response } from "express";
import UserService from "../services/UserService";
import generateHash from "../utils/generateHash";
import jwt from "jsonwebtoken";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";
import getAvatarPath from "../utils/getAvatarPath";
import RouteService from "../services/RouteService";

class UserController {
  async create(req: Request, res: Response) {
    let {
      body: { gender, name, phoneNumber, route },
      file,
    } = req;

    try {
      let routeDoc = await RouteService.getByKladr(route?.city_kladr);

      if (!routeDoc) {
        routeDoc = await RouteService.create(route);
      }

      const payload = {
        gender,
        name,
        route: routeDoc,
        phoneNumber,
      };

      if (file) {
        // @ts-ignore
        payload.avatar = getAvatarPath(file.path);
      }

      const user = await UserService.create(payload);

      const tokens = {
        accessToken: jwt.sign(
          {
            name,
            phoneNumber,
          },
          getEnvProperty(ENV.JWT_SECRET)
        ),
        refreshToken: generateHash(),
      };

      return res.status(201).json({ success: true, user, ...tokens });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      // @ts-ignore
      return res.status(200).json({ user: req?.user, success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async updateAvatar(req: Request, res: Response) {
    const {
      body: { id },
      file,
    } = req;

    try {
      if (!file) {
        return res.status(400).json({ success: false });
      }

      const doc = await UserService.update(id, {
        avatar: getAvatarPath(file!.path),
      });

      if (!doc) {
        return res.status(400).json({ success: false });
      }

      return res
        .status(200)
        .json({ avatar: getAvatarPath(file!.path), success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async updateLocation(req: Request, res: Response) {
    const {
      body: { id, route },
    } = req;

    try {
      let doc = await RouteService.getByKladr(route?.city_kladr);

      if (!doc) {
        doc = await RouteService.create(route);
      }

      const update = await UserService.update(id, { route: doc });

      if (!update) {
        return res.status(400).json({ success: false });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async updateProfile(req: Request, res: Response) {
    const {
      body: { id, property, value },
    } = req;

    try {
      const update = await UserService.update(id, { [property]: value });

      if (!update) {
        return res.status(400).json({ success: false });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new UserController();
