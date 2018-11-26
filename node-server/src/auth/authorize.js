/* @flow */

import {
  type Client,
  type User,
} from './types';

type UsernameAuthArgs = {|
  +username: string,
  +password: string,
|};

export type AuthArgs = {
  +clientId?: ?string,
  +username?: ?string,
  +password?: ?string,
};

async function getClient({clientId}): Promise<Client> {
  if (clientId == null || clientId === '') {
    throw new Error('Must provide valid value for clientId.');
  }
  return {
    id: clientId,
  };
}

async function validateUsernameAuth({username, password}: UsernameAuthArgs): Promise<User> {
  return {
    id: 1,
    username,
    password,
  };
}

export type AuthorizationData = {|
  +client: Client,
  +user: User,
|};

export async function getAuthorizedUser(args: AuthArgs): Promise<AuthorizationData> {
  // Will throw an error if invalid, otherwise returns undefined
  const {
    clientId,
    username,
    password,
  } = args;

  // TODO: implement oauth for Google login and (possibly) Nest login
  if (username == null || password == null) {
    throw new Error('Missing required credentials for username/password auth!');
  }
  const client = await getClient({clientId});
  const user = await validateUsernameAuth({username, password});

  return {
    client,
    user,
  };
}
