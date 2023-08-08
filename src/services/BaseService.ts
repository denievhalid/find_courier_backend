import IService from "./IService";
import { Model } from "mongoose";

export default class BaseService implements IService {
  constructor(private model: Model) {}

  create() {

  }

  getOne() {
    return this.model.findOne()
  }

  getList() {}
}
