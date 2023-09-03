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
    getByPhoneNumber(phoneNumber) {
        return UserModel_1.default.findOne({ phoneNumber });
    }
    sendCode(login) { }
    create(payload) {
        return UserModel_1.default.create(payload);
    }
    update(payload, update) {
        return UserModel_1.default.findOneAndUpdate(payload, update);
    }
    delete() { }
}
exports.default = new UserService();
