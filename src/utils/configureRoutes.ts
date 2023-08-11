import _ from "lodash";
import { Router } from "express";
import type { Request, Response } from "express";

type ExpressAction = (request: Request, response: Response) => void;

export type Config = {
  path: string;
  method: "get" | "post" | "patch" | "delete";
  action: ExpressAction;
};

export const configureRoutes = (config: Config[]) => {
  const router = Router();

  _.forEach(config, (item) => {
    router[item.method](item.path, item.action);
  });

  return router;
};
