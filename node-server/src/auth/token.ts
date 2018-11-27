import jwt from 'express-jwt';

import {
  type Subject,
} from './types';

import {
  type AuthConfig,
} from '.';

type CreateTokenArgs = {|
  +config: AuthConfig,
  +subject: Subject,
  +payload: mixed,
|};

export function createToken(args: CreateTokenArgs): string {
  const {
    config: {
      audience,
      expiresIn,
      issuer,
      privateKey,
    },
    subject,
    payload,
  } = args;
  const signOptions = {
    issuer,
    subject: subject.id,
    audience,
    expiresIn,
    algorithm: 'RS256',
  };
  return jwt.sign(payload, privateKey, signOptions);
}
