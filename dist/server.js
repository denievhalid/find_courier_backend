"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const i18n_1 = __importDefault(require("./i18n"));
const path_1 = __importDefault(require("path"));
const getEnvProperty_1 = __importDefault(require("./utils/getEnvProperty"));
const constants_1 = require("./constants");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const adsRoutes_1 = __importDefault(require("./routes/adsRoutes"));
const AdModel_1 = __importDefault(require("./models/AdModel"));
const LocationModel_1 = __importDefault(require("./models/LocationModel"));
const favoriteRoutes_1 = __importDefault(require("./routes/favoriteRoutes"));
function createServer() {
    const server = (0, express_1.default)();
    useMiddlewares(server);
    useRoutes(server);
    LocationModel_1.default.find().then((data) => {
        const [f, s] = data.map((item) => item._id);
        return;
        AdModel_1.default.create({
            title: "Спортивные часы Casio G-Shock",
            date: "2023-11-11",
            weight: "До 1 кг",
            images: [
                "https://cdn.sportmaster.ru/upload/resize_cache/iblock/5e6/83758520299.jpg",
            ],
            price: "2000",
            from: f,
            to: s,
        });
    });
    server.listen((0, getEnvProperty_1.default)(constants_1.ENV.PORT));
}
exports.createServer = createServer;
function useMiddlewares(server) {
    server.use("/uploads", express_1.default.static(path_1.default.resolve(__dirname, "..", "uploads")));
    server.use((0, cors_1.default)());
    server.use(i18n_1.default.init);
    server.use(body_parser_1.default.json({ limit: "10mb" }));
    server.use(body_parser_1.default.urlencoded({ extended: true }));
}
function useRoutes(server) {
    server.use(constants_1.ROUTES.ADS, adsRoutes_1.default);
    server.use(constants_1.ROUTES.FAVORITES, favoriteRoutes_1.default);
    server.use(constants_1.ROUTES.USERS, userRoutes_1.default);
}
