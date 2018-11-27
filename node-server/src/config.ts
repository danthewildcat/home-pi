import dotenv from 'dotenv';

import {
  AuthConfig,
} from './auth';

export interface Config {
  readonly debug: boolean;
  readonly auth: AuthConfig;
}

function requireEnv(fieldName: string): string {
  const val = process.env[fieldName];
  if (val == null) {
    throw new Error(`Missing required environment variable: ${fieldName}`);
  }
  return val;
}

export default function getConfig(): Config {
  if (process.env.SETTINGS) {
    dotenv.config({path: process.env.SETTINGS});
  }

  const {
    NODE_ENV,
  } = process.env;

  const debug = NODE_ENV === 'development';

  return {
    debug,
    auth: {
      pubKey: requireEnv('AUTH_PUB_KEY'),
      privateKey: requireEnv('AUTH_PRIVATE_KEY'),
      audience: requireEnv('AUTH_AUDIENCE'),
      issuer: requireEnv('AUTH_ISSUER'),
      expiresIn: parseInt(requireEnv('AUTH_TOKEN_EXPIRES_IN'), 10),
    },
  };
}
