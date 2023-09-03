import { configureRoutes } from "../utils/configureRoutes";
import AuthController from "../controllers/AuthController";

export default configureRoutes([
  {
    path: "/sentPinCode",
    method: "post",
    actions: [AuthController.sentPinCode],
  },
  {
    path: "/singIn",
    method: "post",
    actions: [AuthController.singIn],
  },
  {
    path: "/signUp",
    method: "post",
    actions: [AuthController.signUp],
  },
]);
