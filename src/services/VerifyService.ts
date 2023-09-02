import { authenticator } from "otplib";
import type { VerifyType } from "../types";
import VerifyModel from "../models/VerifyModel";

class VerifyService {
  create({ deadline, secret, token, user }: VerifyType) {
    return VerifyModel.create({ deadline, secret, token, user });
  }

  getOne(filter: VerifyType) {
    return VerifyModel.findOne(filter);
  }

  getById(id: string) {
    return VerifyModel.findById(id);
  }

  generate(): Omit<VerifyType, "deadline" | "user"> {
    authenticator.options = {};
    const secret = authenticator.generateSecret();
    const token = authenticator.generate(secret);

    return {
      secret,
      token,
    };
  }

  verify({ secret, token }: Omit<VerifyType, "deadline" | "user">) {
    return authenticator.verify({ secret, token });
  }
}

export default new VerifyService();
