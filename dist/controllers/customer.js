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
const customer_1 = require("../services/customer");
class CustomerController {
    initialize(httpServer) {
        httpServer.get('customers', this.list.bind(this));
        httpServer.get('customer/:id', this.getById.bind(this));
        httpServer.post('customer', this.create.bind(this));
        httpServer.put('customer/:id', this.update.bind(this));
        httpServer.del('customer/:id', this.remove.bind(this));
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield customer_1.customerService.list());
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield customer_1.customerService.getById(req.params.id);
            res.send(customer ? 200 : 404, customer);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield customer_1.customerService.create(req.body));
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield customer_1.customerService.update(Object.assign({}, req.body, { id: req.params.id })));
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield customer_1.customerService.delete(req.params.id);
                res.send(200);
            }
            catch (e) {
                res.send(500);
            }
        });
    }
}
exports.CustomerController = CustomerController;
