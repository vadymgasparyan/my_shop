import express, {Application} from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passportAuth from './middleware/passportMiddleware';

const proxy = require('http-proxy-middleware');

import UserMongooseModel from './mongoModels/User';

import routes from './router';
import passport from "passport";

export default function(): Application {
    const app = express();


    const proxyOptionsFrontend = {
        target: 'http://localhost:3000', // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'http://localhost:3000': 'http://localhost:3001'
        }
    };

    const filter = function(pathname: any, req: any): any {
        return !pathname.includes('/api') && pathname;
    };

    passportAuth.init(passport);

    app.use('/api/files', express.static('src/files'));
    app.use(proxy.createProxyMiddleware(filter, proxyOptionsFrontend));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(
        session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7
            }
        }),
    );
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/', routes);

    const user = UserMongooseModel.find({}, {}, async (err: any, res: any) => {
        if(err) throw err;

        if(res.length === 0){
            await UserMongooseModel.create({
                email: 'expressmarinegroup2@gmail.com',
                password: 'qweqwe123',
            });
        }
    })

    return app;
}
