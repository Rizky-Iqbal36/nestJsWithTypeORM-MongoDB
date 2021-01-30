import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CtaDoc {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  ref: string;

  constructor(type: string, ref: string) {
    (this.type = type), (this.ref = ref);
  }
}