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

  update(id: string, update: UpdateQuery<T>) {
    return UserModel.findByIdAndUpdate(id, update);
  }

  delete() {}
}

export default new UserService<UserType>();
