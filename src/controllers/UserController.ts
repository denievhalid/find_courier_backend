import type { Request, Response } from "express";
import UserService from "../services/UserService";
import SmsService from "../services/SmsService";
import VerifyService from "../services/VerifyService";

class UserController {
  async login(req: Request, res: Response) {
    const {
      body: { login },
    } = req;

    try {
      let user = await UserService.getByLogin(login);

      if (!user) {
        user = await UserService.create({ login });
      }

      const verify = await VerifyService.getOne({
        user,
        deadline: {
          $gt: new Date(),
        },
      });

      if (verify) {
        return res.status(200).json({
          deadline: verify.deadline,
          secret: verify.secret,
        });
      }

      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 60);

      const { secret, token } = VerifyService.generate();

      //await SmsService.send(login, token);

      await VerifyService.create({ deadline, secret, user });

      return res.status(200).json({
        deadline,
        secret,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async register(req: Request, res: Response) {
    const {
      body: { phone },
    } = req;

    try {
    } catch (err) {}
  }

  async verify(req: Request, res: Response) {
    const {
      body: { verifyId, secret, token },
    } = req;

    try {
      // @ts-ignore
      const record = await VerifyService.getOne({
        _id: verifyId,
        secret,
        token,
      });

      if (!record) {
        return res.sendStatus(404);
      }

      const verify = VerifyService.verify({ secret, token });

      if (!verify) {
        return res.sendStatus(404);
      }

      return res.sendStatus(200);
    } catch (err) {}
  }
}

export default new UserController();
