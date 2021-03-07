import {Router, Request, Response} from 'express';
import {createUserController} from '../useCases/CreateUser';

const usersRouter = Router();

usersRouter.get('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'Hello!',
  });
});

usersRouter.post('/', async (request: Request, response: Response) => {
  return createUserController.handleRequest(request, response);
});

export default usersRouter;
