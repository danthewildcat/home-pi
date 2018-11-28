export interface Client {
  id: string;
  name: string;
  isValid: boolean;
}

export interface Subject {
  id: string | number;
  username?: string;
  password?: string;
}
