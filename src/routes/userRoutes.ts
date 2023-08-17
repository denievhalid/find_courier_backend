import { body } from "express-validator";
import UserController from "../controllers/UserController";
import { configureRoutes } from "../utils/configureRoutes";
import UserService from "../services/UserService";

export default configureRoutes([
  {
    path: "/",
    method: "post",
    actions: [
      body("login").custom((login, { req }) => {
        return UserService.getByLogin(login).then((user) => {
          if (user) return Promise.reject("Login already exists");
        });
      }),
      UserController.login,
    ],
  },
  {
    path: "/:id",
    method: "post",
    actions: [UserController.register],
  },
]);
