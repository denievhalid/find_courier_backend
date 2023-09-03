import { authenticator } from "otplib";
import type { VerifyType } from "../types";
import VerifyModel from "../models/VerifyModel";
import { FilterQuery } from "mongoose";

class VerifyService<T> {
  create(payload: VerifyType) {
    return VerifyModel.create(payload);
  }

  getOne(filter: FilterQuery<T>) {
    return VerifyModel.findOne(filter);
  }

  getById(id: string) {
    return VerifyModel.findById(id);
  }

  generate(): { secret: string; token: string } {
    authenticator.options = {};
    const secret = authenticator.generateSecret();
    const token = authenticator.generate(secret);

    return {
      secret,
      token,
    };
  }

  verify({ secret, token }: { secret: string; token: string }) {
    return authenticator.verify({ secret, token });
  }
}

export default new VerifyService<VerifyType>();
