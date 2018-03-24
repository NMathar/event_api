"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const customer_1 = require("./customer");
let Bill = class Bill {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn()
], Bill.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], Bill.prototype, "title", void 0);
__decorate([
    typeorm_1.Column()
], Bill.prototype, "sum", void 0);
__decorate([
    typeorm_1.ManyToOne(type => customer_1.Customer, customer => customer.bills)
], Bill.prototype, "customer", void 0);
Bill = __decorate([
    typeorm_1.Entity()
], Bill);
exports.Bill = Bill;
