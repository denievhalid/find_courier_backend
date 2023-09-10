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
    path: "/updateAvatar",
    method: "post",
    actions: [multer.single("avatar"), UserController.updateAvatar],
  },
  {
    path: "/updateLocation",
    method: "patch",
    actions: [checkAuth, UserController.updateLocation],
  },
  {
    path: "/updateProfile",
    method: "patch",
    actions: [checkAuth, UserController.updateProfile],
  },
  {
    path: "/getProfile",
    method: "get",
    actions: [checkAuth, UserController.getProfile],
  },
]);
