import type { Request, Response } from "express";
import UserService from "../services/UserService";
import jwt from "jsonwebtoken";
import i18n from "../i18n";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";
import type { RequestWithUserType } from "../types";

class UserController {
  async changeAvatar(req: Request, res: Response) {
    try {
      console.log(req.files);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new UserController();
