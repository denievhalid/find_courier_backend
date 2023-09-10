import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import multer from "../utils/multer";
import checkAuth from "../middlewares/checkAuth";

export default configureRoutes([
  {
    path: "/create",
    method: "post",
    actions: [multer.single("avatar"), UserController.create],
  },
  {
    path: "/changeAvatar",
    method: "post",
    actions: [multer.single("avatar"), UserController.changeAvatar],
  },
  {
    path: "/updateProfile",
    method: "post",
    actions: [checkAuth, UserController.updateProfile],
  },
]);
