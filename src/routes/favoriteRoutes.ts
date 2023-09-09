import { configureRoutes } from "../utils/configureRoutes";
import FavoriteController from "../controllers/FavoriteController";

export default configureRoutes([
  {
    path: "/getList",
    method: "get",
    actions: [FavoriteController.get],
  },
  {
    path: "/:id",
    method: "post",
    actions: [FavoriteController.toggle],
  },
  {
    path: "/:id",
    method: "delete",
    actions: [FavoriteController.remove],
  },
]);
