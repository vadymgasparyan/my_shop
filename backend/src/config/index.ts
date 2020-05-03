export const IS_DEV_MODE = process.env.NODE_ENV === 'development';

export const MONGO_DB_URL_DEV = 'mongodb://localhost:27017';
export const MONGO_DB_URL_PROD = process.env.MONGO_HOST || 'mongodb://localhost:27017/';
export const MONGO_DB_NAME = 'shashlik_db';
export const DB_URL = IS_DEV_MODE ? MONGO_DB_URL_DEV : MONGO_DB_URL_PROD;
export const TEST_DB_URL = process.env.MONGO_HOST || MONGO_DB_URL_DEV;
export const PORT = process.env.LISTEN_PORT || '3001';
export const PATH_TO_ATTACHMENT_FOLDER = 'web/attachments';



export default {
    DB_URL,
    DB_NAME: MONGO_DB_NAME,
    PORT,
    IS_DEV_MODE,
    PATH_TO_ATTACHMENT_FOLDER,

    TEST_DB_URL,
    TEST_DB_NAME: 'shashlik_db',
};
