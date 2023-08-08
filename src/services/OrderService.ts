import { OrderType } from "../types";
import OrderModel from "../models/OrderModel";
import BaseService from "./BaseService";

class OrderService extends BaseService {
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
