import express, { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import AppError from './errors/AppError';
import linksRouter from './routes/links';

const app = express();
app.use(express.json());

app.use(cors());

app.use(linksRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      massege: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    massege: 'Internal server error',
  });
});

export default app;
