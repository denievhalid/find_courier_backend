import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import checkAuth from "../middlewares/checkAuth";
import multer from "../utils/multer";

export default configureRoutes([
  {
    path: "/create",
    method: "post",
    actions: [multer.array("avatar", 1), UserController.changeAvatar],
  },
  {
    path: "/changeAvatar",
    method: "post",
    actions: [multer.array("avatar", 1), UserController.changeAvatar],
  },
]);
