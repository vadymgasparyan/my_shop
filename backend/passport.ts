import passportLocal from 'passport-local';
import httpStatus from 'http-status';

import {Request, Response, NextFunction} from 'express';

import {PassportStatic} from "passport";

const LocalStrategy = passportLocal.Strategy;

interface User {
    id: number;
    email: string;
    password: string;
}

const Users: User[] = [
    {
        id: 1,
        email: 'test@gmail.com',
        password: 'qwe123',
    }
]

const authenticationMiddleware = () => {
    return function(req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.status(httpStatus.UNAUTHORIZED).send('unauthorized user');
    };
};

async function findUserByEmail(email: string, password: string, callback: any): Promise<void>{
    const user = Users.find(user => user.email === email);
    if (!user) {
        return callback(null);
    }
    return callback(null, user);

}

async function findUserByID(userId: number, callback: any): Promise<void> {
    const user = Users.find(({id}) => id === userId);

    if (!user) {
        return callback(null);
    }
    return callback(null, user);

}

const setupPassport = (passport: PassportStatic): void => {
    passport.serializeUser(function(user: any, cb: any) {
        cb(null, user.id);
    });


    passport.deserializeUser(async function(userID: number, cb: any) {
        await findUserByID(userID, cb);
    });

    passport.use(
        new LocalStrategy(
        {
                usernameField: 'email',
                passwordField: 'password',
                session: true
            },
        async (email, password, done) => {
                await findUserByEmail(email, password, (compareError: any, user: User) => {
                    if(compareError) {
                        console.log(compareError);
                        return done(compareError);
                    }
                    if (!user) {
                        // eslint-disable-next-line no-console
                        console.log('User not found');
                        return done(null, false,);
                    }

                    if(password === user.password){
                        return done(null, user);
                    }

                    return done(null, false);

                });

        }
        ));
}


export default {
    init: setupPassport,
    authenticationMiddleware,
};
