"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../models/UserModel"));
class UserService {
    get() { }
    getByLogin(login) {
        return UserModel_1.default.findOne({ login });
    }
    create(payload) {
        return UserModel_1.default.create(payload);
    }
    update() { }
    delete() { }
}
exports.default = new UserService();
