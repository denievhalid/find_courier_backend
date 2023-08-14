import _ from "lodash";
import { Router } from "express";
import type { Request, Response, RequestHandler } from "express";

type ExpressAction = (request: Request, response: Response) => void;

export type Config = {
  path: string;
  method: "get" | "post" | "patch" | "delete";
  actions: RequestHandler[];
};

export const configureRoutes = (config: Config[]) => {
  const router = Router();

  _.forEach(config, (item) => {
    router[item.method](item.path, ...item.actions);
  });

  return router;
};
