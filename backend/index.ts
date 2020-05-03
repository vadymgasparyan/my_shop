import httpServer from 'http';

import app from './src/app';
import connectDB from './src/connectDB';
import config from './src/config';

const dbConnection = connectDB(config.DB_URL, config.DB_NAME)
    .on('error', () => {
        console.log({level: 'error', message: `Error on connect to mongodb url ${config.DB_URL}: `});
    })
    .once('open', function() {
        const expressApp = app();
        expressApp.set('port', config.PORT);

        const server = httpServer.createServer(expressApp);
        server.listen(config.PORT);
    });

process.on('unhandledRejection', function(error) {
    if (error) {
        console.error('error', error);
    }
    dbConnection.close().finally(function() {
        process.exit(1);
    });
});
