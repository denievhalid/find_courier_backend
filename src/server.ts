import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import i18n from "./i18n";
import type { Express } from "express";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV, ROUTES } from "./constants";
import userRoutes from "./routes/userRoutes";
import adsRoutes from "./routes/adsRoutes";
import AdModel from "./models/AdModel";
import Location from "./models/LocationModel";
import favoriteRoutes from "./routes/favoriteRoutes";

function createServer() {
  const server: Express = express();

  useMiddlewares(server);
  useRoutes(server);

  Location.find().then((data) => {
    const [f, s] = data.map((item) => item._id);
    return;
    AdModel.create({
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

  server.listen(getEnvProperty(ENV.PORT));
}

function useMiddlewares(server: Express) {
  server.use(cors());
  server.use(i18n.init);
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use("/uploads", express.static("uploads"));
}

function useRoutes(server: Express) {
  server.use(ROUTES.ADS, adsRoutes);
  server.use(ROUTES.FAVORITES, favoriteRoutes);
  server.use(ROUTES.USERS, userRoutes);
}

export { createServer };
