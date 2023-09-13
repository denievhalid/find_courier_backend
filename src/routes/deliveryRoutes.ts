import DeliveryController from "../controllers/DeliveryController";
import { configureRoutes } from "../utils/configureRoutes";
import checkAuth from "../middlewares/checkAuth";

export default configureRoutes([
  {
    path: "/getList",
    method: "get",
    actions: [checkAuth, DeliveryController.getList],
  },
]);
