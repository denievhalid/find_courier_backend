import type { Request, Response } from "express";
import PinCodeService from "../services/PinCodeService";
import i18n from "../i18n";
import jwt from "jsonwebtoken";
import { ENV, PIN_CODE } from "../constants";
import UserService from "../services/UserService";
import getEnvProperty from "../utils/getEnvProperty";
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
        deadline.setSeconds(deadline.getSeconds() + PIN_CODE.DEADLINE);

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
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async signIn(req: Request, res: Response) {
    const {
      body: { pinCode, secret },
    } = req;

    let accessToken;

    try {
      const doc = await PinCodeService.getOne({
        secret,
        deadline: {
          $gt: new Date(),
        },
      });

      if (!doc) {
        return res.status(400).json({
          message: i18n.__("invalid_code"),
        });
      }

      const verify = PinCodeService.verify({ pinCode, secret });

      if (!verify) {
        return res.status(400).json({
          message: i18n.__("invalid_code"),
        });
      }

      await PinCodeService.removeById(doc._id);

      const user = await UserService.getByPhoneNumber(doc.phoneNumber);

      if (user) {
        accessToken = jwt.sign(
          { _id: user._id, phoneNumber: user.phoneNumber },
          getEnvProperty(ENV.JWT_SECRET)
        );
      }

      return res
        .status(200)
        .json({ accessToken, userExist: Boolean(user), success: true });
    } catch (error) {
      return res.status(500).json({ error, success: false });
    }
  }
}

export default new AuthController();
