import AdsController from "../controllers/AdController";
import { configureRoutes } from "../utils/configureRoutes";
import { body } from "express-validator";
//import { getLocationByKladr } from "../middlewares/getLocationByKladr";
import multer from "../utils/multer";
import i18n from "../i18n";
import checkAuth from "../middlewares/checkAuth";

export default configureRoutes([
  {
    path: "/getList",
    method: "get",
    actions: [AdsController.getList],
  },
  {
    path: "/:id",
    method: "get",
    actions: [AdsController.getOne],
  },
  {
    path: "/create",
    method: "post",
    actions: [
      checkAuth,
      multer.array("images", 5),
      body("title").notEmpty().withMessage(i18n.__("required_field")),
      body("price").notEmpty().withMessage(i18n.__("required_field")),
      body("weight").notEmpty().withMessage(i18n.__("required_field")),
      AdsController.create,
    ],
  },
  {
    path: "/updateStatus",
    method: "patch",
    actions: [AdsController.updateStatus],
  },
  {
    path: "/:id",
    method: "delete",
    actions: [AdsController.delete],
  },
]);
