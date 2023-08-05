import mongoose from "mongoose";
import type { Mongoose } from "mongoose";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV } from "./constants";

async function createDatabaseConnection(): Promise<Mongoose> {
  //return mongoose.connect(getEnvProperty(ENV.MONGOOSE_URI) as string);
  return mongoose.connect("mongodb://127.0.0.1:27017/courier");
}

export { createDatabaseConnection };
