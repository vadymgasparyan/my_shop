"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_DEV_MODE = process.env.NODE_ENV === 'development';
exports.MONGO_DB_URL_DEV = 'mongodb://localhost:27017';
exports.MONGO_DB_URL_PROD = process.env.MONGO_HOST || 'mongodb://localhost:27017/';
exports.MONGO_DB_NAME = 'shashlik_db';
exports.DB_URL = exports.IS_DEV_MODE ? exports.MONGO_DB_URL_DEV : exports.MONGO_DB_URL_PROD;
exports.TEST_DB_URL = process.env.MONGO_HOST || exports.MONGO_DB_URL_DEV;
exports.PORT = process.env.LISTEN_PORT || '3001';
exports.PATH_TO_ATTACHMENT_FOLDER = 'web/attachments';
exports.default = {
    DB_URL: exports.DB_URL,
    DB_NAME: exports.MONGO_DB_NAME,
    PORT: exports.PORT,
    IS_DEV_MODE: exports.IS_DEV_MODE,
    PATH_TO_ATTACHMENT_FOLDER: exports.PATH_TO_ATTACHMENT_FOLDER,
    TEST_DB_URL: exports.TEST_DB_URL,
    TEST_DB_NAME: 'shashlik_db',
};
