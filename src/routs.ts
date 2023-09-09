import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { validate } from './middleware/validate';
import { createUserSchema } from './schema/user.schema';

export const routes = (app: Express) => {
  app.get('/check', (req: Request, res: Response) => res.sendStatus(200));

  app.post('/users', validate(createUserSchema), createUserHandler);
};
