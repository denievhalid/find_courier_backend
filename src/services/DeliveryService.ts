import DeliveryModel from "../models/DeliveryModel";

class DeliveryService {
  getByUserId(userId: string) {
    return DeliveryModel.find({ user: userId }).populate("user");
  }
}

export default new DeliveryService();
