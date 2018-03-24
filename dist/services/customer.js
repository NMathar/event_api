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
const customer_1 = require("../models/customer");
const index_1 = require("../database/index");
class CustomerService {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).findOneById(id);
        });
    }
    create(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
            const newCustomer = new customer_1.Customer();
            newCustomer.firstName = customer.firstName;
            newCustomer.lastName = customer.lastName;
            const connection = yield index_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).save(newCustomer);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).find();
        });
    }
    update(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(customer);
            const connection = yield index_1.DatabaseProvider.getConnection();
            const repository = connection.getRepository(customer_1.Customer);
            const entity = yield repository.findOneById(customer.id);
            entity.firstName = customer.firstName;
            entity.lastName = customer.lastName;
            return yield repository.save(entity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield index_1.DatabaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).removeById(id);
        });
    }
}
exports.CustomerService = CustomerService;
exports.customerService = new CustomerService();
