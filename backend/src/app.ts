/* eslint-disable import/no-extraneous-dependencies */
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import './shared/infra/container';
import routes from './shared/infra/http/routes';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);
app.use(express.json());
app.use(routes);

export default app;
