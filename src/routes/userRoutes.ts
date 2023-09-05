import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import multer from "../utils/multer";

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
]);
