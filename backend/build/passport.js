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
const http_status_1 = __importDefault(require("http-status"));
const LocalStrategy = passport_local_1.default.Strategy;
const Users = [
    {
        id: 1,
        email: 'test@gmail.com',
        password: 'qwe123',
    }
];
const authenticationMiddleware = () => {
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(http_status_1.default.UNAUTHORIZED).send('unauthorized user');
    };
};
function findUserByEmail(email, password, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = Users.find(user => user.email === email);
        if (!user) {
            return callback(null);
        }
        return callback(null, user);
    });
}
function findUserByID(userId, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = Users.find(({ id }) => id === userId);
        if (!user) {
            return callback(null);
        }
        return callback(null, user);
    });
}
const setupPassport = (passport) => {
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });
    passport.deserializeUser(function (userID, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            yield findUserByID(userID, cb);
        });
    });
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: true
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        yield findUserByEmail(email, password, (compareError, user) => {
            if (compareError) {
                console.log(compareError);
                return done(compareError);
            }
            if (!user) {
                // eslint-disable-next-line no-console
                console.log('User not found');
                return done(null, false);
            }
            if (password === user.password) {
                return done(null, user);
            }
            return done(null, false);
        });
    })));
};
exports.default = {
    init: setupPassport,
    authenticationMiddleware,
};
