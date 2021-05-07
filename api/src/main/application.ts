import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { resolve } from 'path';
import setupRoutes from './config/routes';
import { auth } from './middleware/auth';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/files', express.static(resolve(__dirname, '..', '..', 'uploads')));

setupRoutes(server, 'public');

server.use(auth);

setupRoutes(server, 'private');

export { server };
