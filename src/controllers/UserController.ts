import { validationResult } from "express-validator";
import type { Request, Response } from "express";

class UserController {
  async login(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    } catch (err) {}
  }

  async register(req: Request, res: Response) {
    try {
    } catch (err) {}
  }
}

export default new UserController();
