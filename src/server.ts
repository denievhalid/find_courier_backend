import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import type { Express } from "express";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV, ROUTES } from "./constants";
import userRoutes from "./routes/userRoutes";
import adsRoutes from "./routes/adsRoutes";

function createServer() {
  const server: Express = express();

  useMiddlewares(server);
  useRoutes(server);

  server.listen(getEnvProperty(ENV.PORT));
}

function useMiddlewares(server: Express) {
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
}

function useRoutes(server: Express) {
  server.use(ROUTES.ADS, adsRoutes);
  server.use(ROUTES.USERS, userRoutes);
}

export { createServer };
