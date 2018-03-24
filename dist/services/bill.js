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
const bill_1 = require("../models/bill");
const index_1 = require("../database/index");
const customer_1 = require("../models/customer");
class BillService {
    list(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return connection.getRepository(bill_1.Bill).find({
                where: {
                    customer: customerId
                }
            });
        });
    }
    create(customerId, bill) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
            const newBill = new bill_1.Bill();
            newBill.title = bill.title;
            newBill.sum = bill.sum;
            const customer = yield connection.getRepository(customer_1.Customer).findOneById(customerId);
            if (!customer) {
                return;
            }
            newBill.customer = customer;
            return yield connection.getRepository(bill_1.Bill).save(newBill);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return connection.getRepository(bill_1.Bill).findOneById(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(bill_1.Bill).removeById(id);
        });
    }
}
exports.BillService = BillService;
exports.billService = new BillService();
