import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";

export default configureRoutes([
  {
    path: "/",
    method: "post",
    actions: [UserController.login],
  },
  {
    path: "/:id",
    method: "post",
    actions: [UserController.register],
  },
]);
