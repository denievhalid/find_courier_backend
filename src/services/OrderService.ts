import { OrderType } from "../types";
import OrderModel from "../models/OrderModel";

class OrderService {
  static async getOne() {
    return OrderModel.findOne();
  }
  static async getList() {
    return OrderModel.find();
  }
  static async create(order: OrderType) {
    return OrderModel.create(order);
  }
}

export default OrderService;
