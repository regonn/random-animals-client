"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
class Cat extends client_1.default {
    constructor() {
        super("https://aws.random.cat/meow");
    }
}
exports.default = Cat;
