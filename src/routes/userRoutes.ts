import UserController from "../controllers/UserController";
import configureStore from "../utils/configureRoutes";

export default configureStore([
  {
    path: "/",
    method: "post",
    action: UserController.login,
  },
  {
    path: "/:id",
    method: "post",
    action: UserController.register,
  },
]);
