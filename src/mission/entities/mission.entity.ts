import { ManyToOne, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class mission extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  datedebut: Date;

  @Column()
  datefin: Date;

  @Column()
  statut: string;
  
}
