"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Client {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get() {
        try {
            const res = await axios_1.default.get(this.baseUrl);
            return res.data.file;
        }
        catch (error) {
            throw error.response.status;
        }
    }
}
exports.default = Client;
