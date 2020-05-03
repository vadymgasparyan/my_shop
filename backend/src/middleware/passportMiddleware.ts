import passportLocal from 'passport-local';
import {Request, Response, NextFunction} from 'express';
import {PassportStatic} from 'passport';

import UserMongooseModel from './../mongoModels/User';

const LocalStrategy = passportLocal.Strategy;

const authenticationMiddleware = () => {
    return function (req: Request, res: Response, next: NextFunction) {
        if ((req.method === 'POST' && req.path === '/api/login') || req.isAuthenticated()) {
            return next();
        }

        res.status(400).send('UnauthorizedError');
    };
};

async function findUserByID(userId: string, callback: any): Promise<void> {
    const user = await UserMongooseModel.findOne({_id: userId});
    if (!user) {
        return callback(null);
    }
    return callback(null, user);
}

const setupPassport = (passport: PassportStatic): void => {
    passport.serializeUser(function (user: any, cb: any) {
        cb(null, user._id);
    });

    passport.deserializeUser(async function (userID: string, cb: any) {
        await findUserByID(userID, cb);
    });

    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                session: true,
            },
            async (email: string, password: string, done) => {
                try {
                    const user = await UserMongooseModel.findOne({email});
                    const userAll = await UserMongooseModel.find({});

                    console.log(email, password);

                    console.log(userAll);
                    console.log(user);
                    if (!user) {
                        // eslint-disable-next-line no-console
                        console.log('User not found');
                        return done(null, false);
                    }

                    if(user.password !== password){
                        return done(null, false);
                    }

                    return done(null, user.toObject());
                } catch (e) {
                    return done(null, false);
                }
            },
        ),
    );
};

export default {
    init: setupPassport,
    authenticationMiddleware,
};
