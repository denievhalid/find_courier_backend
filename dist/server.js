"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const getEnvProperty_1 = __importDefault(require("./utils/getEnvProperty"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const constants_1 = require("./constants");
function createServer() {
    const server = (0, express_1.default)();
    useMiddlewares(server);
    useRoutes(server);
    server.listen((0, getEnvProperty_1.default)(constants_1.ENV.PORT));
}
exports.createServer = createServer;
function useMiddlewares(server) {
    server.use((0, cors_1.default)());
    server.use(body_parser_1.default.json());
    server.use(body_parser_1.default.urlencoded({ extended: false }));
}
function useRoutes(server) {
    server.use(constants_1.ROUTES.ORDER, orderRoutes_1.default);
}
