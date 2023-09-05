import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import checkAuth from "../middlewares/checkAuth";
import multer from "../utils/multer";

export default configureRoutes([
  {
    path: "/create",
    method: "post",
    actions: [UserController.create],
  },
  {
    path: "/changeAvatar",
    method: "post",
    actions: [multer.single("avatar"), UserController.changeAvatar],
  },
]);
