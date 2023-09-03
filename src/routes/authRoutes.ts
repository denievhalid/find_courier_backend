import { configureRoutes } from "../utils/configureRoutes";
import AuthController from "../controllers/AuthController";

export default configureRoutes([
  {
    path: "/sentPinCode",
    method: "post",
    actions: [AuthController.sentPinCode],
  },
  {
    path: "/signIn",
    method: "post",
    actions: [AuthController.signIn],
  },
]);
