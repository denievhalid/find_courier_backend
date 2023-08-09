import { createServer } from "./server";
import { createDatabaseConnection } from "./database";

createDatabaseConnection().then(createServer);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
