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
const passport_local_1 = __importDefault(require("passport-local"));
const User_1 = __importDefault(require("./../mongoModels/User"));
const LocalStrategy = passport_local_1.default.Strategy;
const authenticationMiddleware = () => {
    return function (req, res, next) {
        if ((req.method === 'POST' && req.path === '/api/login') || req.isAuthenticated()) {
            return next();
        }
        res.status(400).send('UnauthorizedError');
    };
};
function findUserByID(userId, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ _id: userId });
        if (!user) {
            return callback(null);
        }
        return callback(null, user);
    });
}
const setupPassport = (passport) => {
    passport.serializeUser(function (user, cb) {
        cb(null, user._id);
    });
    passport.deserializeUser(function (userID, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            yield findUserByID(userID, cb);
        });
    });
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: true,
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_1.default.findOne({ email });
            const userAll = yield User_1.default.find({});
            console.log(email, password);
            console.log(userAll);
            console.log(user);
            if (!user) {
                // eslint-disable-next-line no-console
                console.log('User not found');
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user.toObject());
        }
        catch (e) {
            return done(null, false);
        }
    })));
};
exports.default = {
    init: setupPassport,
    authenticationMiddleware,
};
