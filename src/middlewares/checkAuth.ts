import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";

type RequestWithUser = Request & {
  user: string;
};

export default async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, getEnvProperty(ENV.JWT_SECRET), (err: any, user: any) => {
      if (err) return res.sendStatus(403);

      // @ts-ignore
      req.user = user;

      next();
    });
  } catch (err) {
    return res.sendStatus(403);
  }
}
