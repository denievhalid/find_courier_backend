import type { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";

export default async function getUserByLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    body: { login },
  } = req;

  try {
    // @ts-ignore
    req.user = await UserService.getByLogin(login);
    next();
  } catch (err) {
    next(err);
  }
}
