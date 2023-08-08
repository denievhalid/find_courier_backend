import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import type { Express } from "express";
import getEnvProperty from "./utils/getEnvProperty";
import orderRoutes from "./routes/orderRoutes";
import { ENV, ROUTES } from "./constants";

function createServer() {
  const server: Express = express();

  useMiddlewares(server);
  useRoutes(server);

  server.listen(getEnvProperty(ENV.PORT));
}

function useMiddlewares(server: Express) {
  //server.use(cors());
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  });
}

function useRoutes(server: Express) {
  server.get("/", (req, res) => {
    res.send("123");
  });
  server.use(ROUTES.ORDER, orderRoutes);
}

export { createServer };
