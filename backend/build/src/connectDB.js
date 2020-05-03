"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const mongoose_1 = __importDefault(require("mongoose"));
function default_1(dbUrl, dbName) {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName,
    };
    mongoose_1.default.connect(encodeURI(dbUrl), options);
    return mongoose_1.default.connection;
}
exports.default = default_1;
