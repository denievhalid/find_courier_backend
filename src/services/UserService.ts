import UserModel from "../models/UserModel";
import { UserType } from "../types";
import { FilterQuery } from "mongoose";

class UserService<T> {
  get() {}

  getByLogin(login: string) {
    return UserModel.findOne({ login });
  }

  sendCode(login: string) {}

  create(payload: FilterQuery<T>) {
    return UserModel.create(payload);
  }

  update() {}

  delete() {}
}

export default new UserService<UserType>();
