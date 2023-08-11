import AdsController from "../controllers/AdsController";
import configureStore from "../utils/configureRoutes";

export default configureStore([
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
