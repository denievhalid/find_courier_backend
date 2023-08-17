import _ from "lodash";
import type { NextFunction, Response, Request } from "express";
import LocationService from "../services/LocationService";

export async function getLocationByKladr(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return next();
  const { from, to } = req.query;

  try {
    _.forEach([from, to], (el) => {});
    const item = await LocationService.getByKladr(Number(req.query?.from));
    // @ts-ignore
    req.query.from = item;
    next();
  } catch (err) {
    next(err);
  }
}
