import AdsController from "../controllers/AdController";
import { configureRoutes } from "../utils/configureRoutes";
import LocationService from "../services/LocationService";
import { getLocationByKladr } from "../middlewares/getLocationByKladr";
import multer from "../utils/multer";

export default configureRoutes([
  {
    path: "/",
    method: "get",
    actions: [getLocationByKladr, AdsController.getList],
  },
  {
    path: "/:id",
    method: "get",
    actions: [AdsController.getOne],
  },
  {
    path: "/",
    method: "post",
    actions: [AdsController.create],
  },
  {
    path: "/:id",
    method: "delete",
    actions: [AdsController.delete],
  },
]);
