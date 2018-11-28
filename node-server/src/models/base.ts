import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  DateTime,
} from '../utils/types';

export abstract class BaseModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn()
  createdAt?: DateTime;

  @UpdateDateColumn()
  modifiedAt?: DateTime;

  @Column({
    // Do not return this value unless explicitly asked for
    select: false,
  })
  deletedAt?: DateTime;
}
