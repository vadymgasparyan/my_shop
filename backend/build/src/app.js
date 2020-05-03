"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const passportMiddleware_1 = __importDefault(require("./middleware/passportMiddleware"));
const proxy = require('http-proxy-middleware');
const User_1 = __importDefault(require("./mongoModels/User"));
const router_1 = __importDefault(require("./router"));
const passport_1 = __importDefault(require("passport"));
function default_1() {
    const app = express_1.default();
    const proxyOptionsFrontend = {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'http://localhost:3000': 'http://localhost:3001'
        }
    };
    const filter = function (pathname, req) {
        return !pathname.includes('/api') && pathname;
    };
    passportMiddleware_1.default.init(passport_1.default);
    app.use('/api/files', express_1.default.static('src/files'));
    app.use(proxy.createProxyMiddleware(filter, proxyOptionsFrontend));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.use(express_session_1.default({
        secret: 'keyboard cat',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }));
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use('/', router_1.default);
    const user = User_1.default.find({}, {}, (err, res) => __awaiter(this, void 0, void 0, function* () {
        if (err)
            throw err;
        if (res.length === 0) {
            yield User_1.default.create({
                email: 'expressmarinegroup2@gmail.com',
                password: 'qweqwe123',
            });
        }
    }));
    return app;
}
exports.default = default_1;
