/* @flow */

import {
  Router,

  type NextFunction,
  type $Request as Request,
  type $Response as Response,
} from 'express';

import getConfig from '../config';

import {mixedVerbHandler} from '../utils/express';
import {
  getAuthorizedSubject,

  type AuthArgs,
} from './authorize';
import {createToken} from './token';

export const router = new Router();

router.post('/token', async (req: Request, resp: Response, _: NextFunction): Promise<Response> => {
  const config = getConfig();
  // $FlowIgnore - we know this can be 'any' and the handlers validate the args safely so ignore the warning
  const body = ((req.body: any): ?AuthArgs);
  if (body == null) {
    // TODO: Log this error!
    return resp.status(401).send({
      error: 'Empty request body. Must provide auth credentials.',
    });
  }
  const {subject, client} = await getAuthorizedSubject(body);
  const token = await createToken({
    config: config.auth,
    subject,
    payload: {
      client,
    },
  });
  return resp.send({token});
});

router.post('/refresh', async (req: Request, resp: Response, _next: NextFunction): Promise<Response> => {
  // TODO: Implement me!
  console.error('Refresh called but is not implemented!');
  return resp.status(500).send('Not implemented!');
});

mixedVerbHandler({
  path: '/authorize',
  router,
  verbs: ['get', 'post'],
  handler: async (_req: Request, resp: Response, _next: NextFunction): Promise<Response> => {
    // TODO: Implement me!
    console.error('Authorize called but is not implemented!');
    return resp.status(500).send('Not implemented!');
  },
});

mixedVerbHandler({
  path: '/unauthorize',
  router,
  verbs: ['get', 'post'],
  handler: async (_req: Request, resp: Response, _next: NextFunction): Promise<Response> => {
    // TODO: Implement me!
    console.error('Unauthorize called but is not implemented!');
    return resp.status(500).send('Not implemented!');
  },
});
