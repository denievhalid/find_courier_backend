"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIN_CODE = exports.ROUTES = exports.ENV = void 0;
exports.ENV = {
    JWT_SECRET: "jwt_secret",
    PORT: "port",
    MONGOOSE_URI: "mongoose_uri",
    SMS_API_URL: "sms_api_url",
    SMS_LOGIN: "sms_login",
    SMS_PASSWORD: "sms_password",
    SMS_SENDER: "sms_sender",
};
exports.ROUTES = {
    ADS: "/ads",
    AUTH: "/auth",
    FAVORITES: "/favorites",
    USERS: "/users",
};
exports.PIN_CODE = {
    DIGITS: 4,
    DEADLINE: 60,
};
