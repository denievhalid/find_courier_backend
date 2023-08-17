import { configureRoutes } from "../utils/configureRoutes";
import FavoriteController from "../controllers/FavoriteController";

export default configureRoutes([
  {
    path: "/:ad",
    method: "get",
    actions: [FavoriteController.get],
  },
  {
    path: "/:ad",
    method: "post",
    actions: [FavoriteController.add],
  },
  {
    path: "/:id",
    method: "delete",
    actions: [FavoriteController.remove],
  },
]);