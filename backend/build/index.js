"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const connectDB_1 = __importDefault(require("./src/connectDB"));
const config_1 = __importDefault(require("./src/config"));
const dbConnection = connectDB_1.default(config_1.default.DB_URL, config_1.default.DB_NAME)
    .on('error', () => {
    console.log({ level: 'error', message: `Error on connect to mongodb url ${config_1.default.DB_URL}: ` });
})
    .once('open', function () {
    const expressApp = app_1.default();
    expressApp.set('port', config_1.default.PORT);
    const server = http_1.default.createServer(expressApp);
    server.listen(config_1.default.PORT);
});
process.on('unhandledRejection', function (error) {
    if (error) {
        console.error('error', error);
    }
    dbConnection.close().finally(function () {
        process.exit(1);
    });
});
