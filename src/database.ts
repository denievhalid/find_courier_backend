import mongoose from "mongoose";
import type { Mongoose } from "mongoose";
import getEnvProperty from "./utils/getEnvProperty";
import { ENV } from "./constants";

async function createDatabaseConnection(): Promise<Mongoose> {
  return mongoose.connect(getEnvProperty(ENV.MONGOOSE_URI));
}

export { createDatabaseConnection };
