import { configureRoutes } from "../utils/configureRoutes";
import FavoriteController from "../controllers/FavoriteController";
import checkAuth from "../middlewares/checkAuth";

export default configureRoutes([
  {
    path: "/getList",
    method: "get",
    actions: [checkAuth, checkAuth, FavoriteController.get],
  },
  {
    path: "/:id",
    method: "post",
    actions: [checkAuth, FavoriteController.toggle],
  },
  {
    path: "/removeById/:id",
    method: "delete",
    actions: [checkAuth, FavoriteController.delete],
  },
]);
