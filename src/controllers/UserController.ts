import type { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async create(req: Request, res: Response) {
    let {
      body: { gender, name, phoneNumber },
      file,
    } = req;

    try {
      await UserService.create({
        avatar: file?.path,
        gender,
        name,
        phoneNumber,
      });

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
