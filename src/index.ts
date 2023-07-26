import { createServer } from "./server";
import { createDatabaseConnection } from "./database";

createDatabaseConnection().then(createServer);
