import UserModel from "../models/UserModel";
import { UserType } from "../types";

class UserService<T> {
  get() {}

  getByLogin(login: string) {
    return UserModel.findOne({ login });
  }

  create(payload: T) {
    return UserModel.create(payload);
  }

  update() {}

  delete() {}
}

export default new UserService<UserType>();
