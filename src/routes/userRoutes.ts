import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import checkAuth from "../middlewares/checkAuth";

export default configureRoutes([
  {
    path: "/login",
    method: "post",
    actions: [UserController.login],
  },
  {
    path: "/verify",
    method: "post",
    actions: [UserController.verify],
  },
  {
    path: "/:id",
    method: "post",
    actions: [UserController.register],
  },
  {
    path: "/",
    method: "patch",
    actions: [checkAuth, UserController.update],
  },
]);
