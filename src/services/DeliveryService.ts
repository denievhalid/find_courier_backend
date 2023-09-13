import DeliveryModel from "../models/DeliveryModel";

class DeliveryService {
  getByUserId(userId: string) {
    return DeliveryModel.find({ user: userId });
  }
}

export default new DeliveryService();
