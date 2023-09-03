import type { FilterQuery } from "mongoose";
import type { PinCodeType } from "../types";
import PinCodeModel from "../models/PinCodeModel";
import { authenticator } from "otplib";

class PinCodeService<T> {
  create(payload: T) {
    return PinCodeModel.create(payload);
  }

  getOne(filter: FilterQuery<T>) {
    return PinCodeModel.findOne(filter);
  }

  generate(): { secret: string; pinCode: string } {
    authenticator.options = {
      epoch: 59,
    };
    const secret = authenticator.generateSecret();
    const pinCode = authenticator.generate(secret);

    return {
      secret,
      pinCode,
    };
  }
}

export default new PinCodeService<PinCodeType>();
