"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const bill_1 = require("./bill");
const default_1 = require("./default");
exports.CONTROLLERS = [
    new customer_1.CustomerController(),
    new bill_1.BillController(),
    new default_1.DefaultController()
];
