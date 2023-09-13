import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import i18n from "./i18n";
import path from "path";
import type { Express } from "express";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV, ROUTES } from "./constants";
import userRoutes from "./routes/userRoutes";
import adsRoutes from "./routes/adsRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";
import authRoutes from "./routes/authRoutes";
import deliveryRoutes from "./routes/deliveryRoutes";

function createServer() {
  const server: Express = express();

  useMiddlewares(server);
  useRoutes(server);

  server.listen(getEnvProperty(ENV.PORT));
}

function useMiddlewares(server: Express) {
  server.use(
    "/uploads",
    express.static(path.resolve(__dirname, "..", "uploads"))
  );
  server.use(cors());
  server.use(i18n.init);
  server.use(bodyParser.json({ limit: "35mb" }));
  server.use(
    bodyParser.urlencoded({
      limit: "35mb",
      parameterLimit: 50000,
    })
  );
}

function useRoutes(server: Express) {
  server.use(ROUTES.ADS, adsRoutes);
  server.use(ROUTES.AUTH, authRoutes);
  server.use(ROUTES.DELIVERIES, deliveryRoutes);
  server.use(ROUTES.FAVORITES, favoriteRoutes);
  server.use(ROUTES.USERS, userRoutes);
}

export { createServer };
