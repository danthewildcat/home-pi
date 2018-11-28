import {
  Column,
  Entity,
} from 'typeorm';

import {
  BaseModel,
} from './base';

@Entity()
export class Client extends BaseModel {
  @Column()
  name: string;

  @Column()
  isValid: boolean;
}
