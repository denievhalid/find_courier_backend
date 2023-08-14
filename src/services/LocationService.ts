import { LocationType } from "../types";
import LocationModel from "../models/LocationModel";

class LocationService<T> {
  getByKladr(city_kladr_id: number) {
    return LocationModel.findOne({ city_kladr_id });
  }
}

export default new LocationService<LocationType>();
