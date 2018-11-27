export {router} from './router';

export interface AuthConfig {
  pubKey: string;
  privateKey: string;
  audience: string;
  issuer: string;
  expiresIn: number;
}
