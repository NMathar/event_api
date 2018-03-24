"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const index_1 = require("./server/index");
const index_2 = require("./database/index");
index_2.DatabaseProvider.configure({
    type: process.env.DATABASE_TYPE || 'mysql',
    database: process.env.DATABASE_NAME || 'eventapi',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 3306
});
const server = new index_1.Server();
server.start(+process.env.PORT || 8080);
exports.default = server;
