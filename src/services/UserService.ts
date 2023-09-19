import UserModel from "../models/UserModel";
import { UserType } from "../types";
import { FilterQuery, UpdateQuery } from "mongoose";

class UserService<T> {
  get() {}

  getByLogin(login: string) {
    return UserModel.findOne({ login }).populate("route");
  }

  getByPhoneNumber(phoneNumber: number) {
    return UserModel.findOne({ phoneNumber }).populate("route");
  }

  sendCode(login: string) {}

  create(payload: FilterQuery<T>) {
    return UserModel.create(payload);
  }

  update(id: string, update: UpdateQuery<T>) {
    return UserModel.findByIdAndUpdate(id, update);
  }

  removeAvatar(id: string) {
    return UserModel.findByIdAndUpdate(id, { $set: { avatar: null } });
  }
}

export default new UserService<UserType>();
