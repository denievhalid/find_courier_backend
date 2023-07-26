"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const database_1 = require("./database");
(0, database_1.createDatabaseConnection)().then(server_1.createServer);
