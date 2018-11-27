import {
  type Middleware,
  type Router,
} from 'express';

type ValidVerbs = 'get' | 'post' | 'put' | 'patch' | 'delete';

type MixedVerbArgs = {|
  +path: string | RegExp,
  +router: Middleware | Router,
  +verbs: $ReadOnlyArray<ValidVerbs>,
  +handler: Middleware,
|};

export function mixedVerbHandler(args: MixedVerbArgs) {
  const {
    path,
    router,
    verbs,
    handler,
  } = args;
  verbs.forEach(verb => {
    switch (verb) {
    case 'get':
      router.get(path, handler);
      break;
    case 'post':
      router.post(path, handler);
      break;
    case 'put':
      router.put(path, handler);
      break;
    case 'patch':
      router.patch(path, handler);
      break;
    case 'delete':
      router.delete(path, handler);
      break;
    default:
      throw new Error('Invalid verb for request!');
    }
  });
}
