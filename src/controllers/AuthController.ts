import type { Request, Response } from "express";
import PinCodeService from "../services/PinCodeService";
import SmsService from "../services/SmsService";

class AuthController {
  async sentPinCode(req: Request, res: Response) {
    const {
      body: { phoneNumber },
    } = req;

    let deadline;

    try {
      let doc = await PinCodeService.getOne({
        phoneNumber,
        deadline: {
          $gt: new Date(),
        },
      });

      if (!doc) {
        deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);

        const { pinCode, secret } = PinCodeService.generate();

        await SmsService.send(phoneNumber, pinCode);

        doc = await PinCodeService.create({
          deadline,
          phoneNumber,
          secret,
        });
      }

      return res.status(200).json({
        deadline: doc.deadline,
        secret: doc.secret,
      });
    } catch (error) {}
  }

  async singIn(req: Request, res: Response) {}

  async signUp(req: Request, res: Response) {}
}

export default new AuthController();
