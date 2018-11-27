export {router} from './router';

export type AuthConfig = {|
  +pubKey: string,
  +privateKey: string,
  +audience: string,
  +issuer: string,
  +expiresIn: number,
|};
