import UserModel from "../models/UserModel";
import { UserType } from "../types";
import { FilterQuery, UpdateQuery } from "mongoose";

class UserService<T> {
  get() {}

  getByLogin(login: string) {
    return UserModel.findOne({ login });
  }

  getByPhoneNumber(phoneNumber: number) {
    return UserModel.findOne({ phoneNumber });
  }

  sendCode(login: string) {}

  create(payload: FilterQuery<T>) {
    return UserModel.create(payload);
  }

  update(payload: FilterQuery<T>, update: UpdateQuery<T>) {
    return UserModel.findOneAndUpdate(payload, update);
  }

  delete() {}
}

export default new UserService<UserType>();
