"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../models/UserModel"));
class UserService {
    get() { }
    getByLogin(login) {
        return UserModel_1.default.findOne({ login }).populate("route");
    }
    getByPhoneNumber(phoneNumber) {
        return UserModel_1.default.findOne({ phoneNumber }).populate("route");
    }
    sendCode(login) { }
    create(payload) {
        return UserModel_1.default.create(payload);
    }
    update(id, update) {
        return UserModel_1.default.findByIdAndUpdate(id, update);
    }
    removeAvatar(id) {
        return UserModel_1.default.findByIdAndUpdate(id, { $set: { avatar: null } });
    }
}
exports.default = new UserService();
