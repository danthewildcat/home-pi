/* @flow */

import jwt from 'express-jwt';

import {
  type User,
} from './types';

import {
  type AuthConfig,
} from '.';

type CreateTokenArgs = {|
  +config: AuthConfig,
  +user: User,
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
    user,
    payload,
  } = args;
  const signOptions = {
    issuer,
    subject: user.id,
    audience,
    expiresIn,
    algorithm: 'RS256',
  };
  return jwt.sign(payload, privateKey, signOptions);
}
