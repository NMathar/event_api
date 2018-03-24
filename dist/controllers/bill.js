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
const bill_1 = require("../services/bill");
class BillController {
    initialize(httpServer) {
        httpServer.get('customer/:id/bills', this.list.bind(this));
        httpServer.get('customer/:id/bill/:bid', this.getById.bind(this));
        httpServer.post('customer/:id/bill', this.create.bind(this));
        httpServer.del('customer/:id/bill/:bid', this.remove.bind(this));
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield bill_1.billService.list(req.params.id));
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bill = yield bill_1.billService.getById(req.params.id);
            res.send(bill ? 200 : 404, bill);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield bill_1.billService.create(req.params.id, req.body));
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield bill_1.billService.delete(req.params.bid);
                res.send(200);
            }
            catch (e) {
                console.log(e);
                res.send(500);
            }
        });
    }
}
exports.BillController = BillController;
