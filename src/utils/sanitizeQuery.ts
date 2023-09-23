import { Query } from "../types";

export function sanitizeQuery(rawQuery: Record<string, any>): Query {
  const query: Query = {};

  if (rawQuery["limit"]) {
    query.limit = rawQuery["limit"];
  }

  return query;
}
