import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// This global is needed by TypeORM
import 'reflect-metadata';

import {
  router as authRouter,
} from './auth';

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(authRouter);
