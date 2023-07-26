import { OrderType } from "../types";
import OrderModel from "../models/OrderModel";

class UserService {
  static async getList() {
    return OrderModel.find();
  }

  static async getOne() {
    return OrderModel.findOne();
  }

  static async create(order: OrderType) {
    return OrderModel.create(order);
  }
}

export default UserService;
