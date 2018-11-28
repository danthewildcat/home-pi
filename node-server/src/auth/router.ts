import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

import getConfig from '../config';

import {
  getAuthorizedSubject,
} from './authorize';
import {
  createToken,
} from './token';

export const router: Router = Router();

router.post('/token', async (req: Request, resp: Response, _: NextFunction) => {
  const config = getConfig();
  const body = req.body;
  if (body == null) {
    // TODO: Log this error!
    return resp.status(401).send({
      error: 'Empty request body. Must provide auth credentials.',
    });
  }
  const {subject, client} = await getAuthorizedSubject(body);
  const token = await createToken({
    subject,
    config: config.auth,
    payload: {
      client,
    },
  });
  return resp.send({token});
});

router.post('/refresh', async (req: Request, resp: Response, _next: NextFunction) => {
  // TODO: Implement me!
  console.error('Refresh called but is not implemented!');
  return resp.status(500).send('Not implemented!');
});

router.post('/authorize', async (req: Request, resp: Response, _next: NextFunction) => {
    // TODO: Implement me!
  console.error('Authorize called but is not implemented!');
  return resp.status(500).send('Not implemented!');
});

router.post('/unauthorize', async (req: Request, resp: Response, _next: NextFunction) => {
    // TODO: Implement me!
  console.error('Unauthorize called but is not implemented!');
  return resp.status(500).send('Not implemented!');
});
