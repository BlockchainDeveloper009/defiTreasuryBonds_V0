"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(c, d, a) {
        this.sinvoices = [];
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount}`;
    }
    setsInvoicesArrayValues() {
        this.sinvoices.push(new Invoice('1', 'one', '1'));
        this.sinvoices.push(new Invoice('2', 'two', '2'));
        this.sinvoices.push(new Invoice('3', 'three', '3'));
    }
    printArrsinvoices() {
        this.sinvoices.forEach(inv => {
            console.log(inv.client, inv.details, inv.amount, inv.format());
        });
    }
}
exports.Invoice = Invoice;
