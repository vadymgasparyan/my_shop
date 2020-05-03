// @ts-ignore
import mongoose, {Connection} from 'mongoose';

export default function(dbUrl: string, dbName: string): Connection {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName,
    };

    (mongoose as any).connect(encodeURI(dbUrl), options);
    return mongoose.connection;
}
