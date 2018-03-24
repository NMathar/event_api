"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const customer_1 = require("../models/customer");
const bill_1 = require("../models/bill");
class DatabaseProvider {
    static configure(databaseConfiguration) {
        DatabaseProvider.configuration = databaseConfiguration;
    }
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (DatabaseProvider.connection) {
                return DatabaseProvider.connection;
            }
            if (!DatabaseProvider.configuration) {
                throw new Error('DatabaseProvider is not configured yet.');
            }
            const { type, host, port, username, password, database } = DatabaseProvider.configuration;
            DatabaseProvider.connection = yield typeorm_1.createConnection({
                type, host, port, username, password, database,
                entities: [
                    customer_1.Customer,
                    bill_1.Bill
                ],
                autoSchemaSync: true
            }); // as any to prevent complaining about the object does not fit to MongoConfiguration, which we won't use here
            return DatabaseProvider.connection;
        });
    }
}
exports.DatabaseProvider = DatabaseProvider;
