import jwt, {
  SignOptions,
} from 'jsonwebtoken';
import {
  AuthConfig,
} from './';
import {
  Subject,
} from './types';

interface CreateTokenArgs {
  readonly config: AuthConfig;
  readonly subject: Subject;
  readonly payload: any;
}

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
  const signOptions: SignOptions = {
    issuer,
    audience,
    expiresIn,
    subject: subject.id.toString(),
    algorithm: 'RS256',
  };
  return jwt.sign(payload, privateKey, signOptions);
}
