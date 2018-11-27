import {
  Client,
  Subject,
} from './types';

async function getClient({clientId}: {clientId: string}) {
  if (clientId == null || clientId === '') {
    throw new Error('Must provide valid value for clientId.');
  }
  return {
    id: clientId,
    name: 'Test Client',
    isValid: true,
  };
}

interface UsernameAuthArgs {
  readonly username: string;
  readonly password: string;
}

async function validateUsernameAuth({username, password}: UsernameAuthArgs) {
  return {
    username,
    password,
    id: 1,
  };
}

interface AuthorizedSubjectArgs {
  readonly clientId: string;
  readonly username?: string;
  readonly password?: string;
}

interface AuthorizeSubjectResponse {
  readonly subject: Subject;
  readonly client: Client;
}

export async function getAuthorizedSubject(args: AuthorizedSubjectArgs): Promise<AuthorizeSubjectResponse> {
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
  const subject = await validateUsernameAuth({username, password});

  return {
    client,
    subject,
  };
}
