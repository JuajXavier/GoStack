import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'email',
    password: 'senha',
    techs: [
    'Node.js',
     'React',
     { title: 'JS', experience: 100 },
    ],
  });

  console.log(user.email);

  return res.json({ message: 'Hello World'});
}