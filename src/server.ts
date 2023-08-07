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
  //server.listen(2222);
}

function useMiddlewares(server: Express) {
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
}

function useRoutes(server: Express) {
  server.get("/", (req, res) => {
    res.send("hello 2 55");
  });
  server.use(ROUTES.ORDER, orderRoutes);
}

export { createServer };
