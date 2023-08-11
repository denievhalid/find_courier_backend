import AdsController from "../controllers/AdsController";
import { configureRoutes } from "../utils/configureRoutes";

export default configureRoutes([
  {
    path: "/",
    method: "get",
    action: AdsController.getList,
  },
  {
    path: "/:id",
    method: "get",
    action: AdsController.getOrder,
  },
  {
    path: "/",
    method: "post",
    action: AdsController.createOrder,
  },
]);
