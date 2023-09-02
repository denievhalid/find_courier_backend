import { body } from "express-validator";
import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import UserService from "../services/UserService";

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
]);
