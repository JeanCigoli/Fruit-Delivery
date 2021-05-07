import 'dotenv/config';

export const SERVER = {
  PORT: process.env.PORT || 3355,
  NODE_ENV: process.env.NODE_ENV || 'development',
  BASE_URI: process.env.BASE_URI || '',
};

export const DATABASE = {
  DB_NAME: process.env.DB_NAME || '',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: process.env.DB_PORT || '',
};

export const JWT = {
  APP_SECRET: process.env.APP_SECRET || '',
};

export const URL_BASE = {
  IMAGE: process.env.IMAGE || '',
};
