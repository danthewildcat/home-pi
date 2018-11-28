import {
  Column,
  Entity,
} from 'typeorm';

import {
  BaseModel,
} from './base';

@Entity()
export class Subject extends BaseModel {
  @Column()
  username?: string;

  @Column()
  password?: string;

  @Column()
  isActive!: boolean;
}
