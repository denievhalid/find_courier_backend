import type { Request, Response } from "express";
import UserService from "../services/UserService";
import _ from "lodash";
import jwt from "jsonwebtoken";
import i18n from "../i18n";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";
import type { RequestWithUserType } from "../types";

class UserController {
  async create(req: Request, res: Response) {
    let {
      body: { avatar, name, gender },
    } = req;

    try {
      if (_.isObject(gender)) {
        // @ts-ignore
        gender = gender?.id;
      }

      await UserService.create({ avatar, name, gender });
      return res.status(201).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }

  async changeAvatar(req: Request, res: Response) {
    try {
      return res.status(200).json({ path: req.file?.path, success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new UserController();
