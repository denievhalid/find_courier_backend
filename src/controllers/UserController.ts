import type { Request, Response } from "express";
import UserService from "../services/UserService";
import generateHash from "../utils/generateHash";
import jwt from "jsonwebtoken";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";

class UserController {
  async create(req: Request, res: Response) {
    let {
      body: { gender, name, phoneNumber },
      file,
    } = req;

    try {
      const user = await UserService.create({
        avatar: file?.path,
        gender,
        name,
        phoneNumber,
      });

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
      const doc = await UserService.update(id, { avatar: file?.path });

      if (!doc) {
        return res.status(400).json({ success: false });
      }

      return res.status(200).json({ path: file?.path, success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error, success: false });
    }
  }

  async updateProfile(req: Request, res: Response) {
    const {
      body: { id, gender, name, city },
    } = req;

    try {
      const update = await UserService.update(id, { gender, name, city });

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
