import RouteModel from "../models/RouteModel";
import type { RouteType } from "../types";
import { FilterQuery } from "mongoose";

class RouteService<T> {
  create(payload: FilterQuery<T>) {
    return RouteModel.create(payload);
  }

  getByKladr(city_kladr: number) {
    return RouteModel.findOne({ city_kladr });
  }
}

export default new RouteService<RouteType>();
