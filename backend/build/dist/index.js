"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('hello');
});
const server = app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server start on port ${server.address()}`);
});
