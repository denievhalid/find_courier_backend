import type { FilterQuery } from "mongoose";
import type { PinCodeType } from "../types";
import PinCodeModel from "../models/PinCodeModel";
import { authenticator } from "otplib";
import { PIN_CODE } from "../constants";
import mongoose from "mongoose";

class PinCodeService<T> {
  create(payload: T) {
    return PinCodeModel.create(payload);
  }

  getOne(filter: FilterQuery<T>) {
    return PinCodeModel.findOne(filter);
  }

  generate(): { secret: string; pinCode: string } {
    authenticator.options = {
      digits: PIN_CODE.DIGITS,
      epoch: PIN_CODE.DEADLINE,
    };
    const secret = authenticator.generateSecret();
    const pinCode = authenticator.generate(secret);

    return {
      secret,
      pinCode,
    };
  }

  removeById(id: mongoose.Types.ObjectId) {
    return PinCodeModel.findByIdAndRemove(id);
  }

  verify({ pinCode, secret }: { pinCode: string; secret: string }): boolean {
    return authenticator.verify({ secret, token: pinCode });
  }
}

export default new PinCodeService<PinCodeType>();
