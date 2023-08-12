import IService from "./IService";
import { Model } from "mongoose";
import { Mode } from "fs";

export default class BaseService implements IService {
  create() {}

  getOne() {
    //return this.model.findOne();
  }

  getList() {}
}
