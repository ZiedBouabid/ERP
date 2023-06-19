import { OneToMany, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { mission } from 'src/mission/entities/mission.entity';
import { fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  role: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  tele : string;

  @Column()
  secondeRole : string

  @OneToMany(
    type => mission,
    (mission) => mission,
    {
      nullable: true,
      cascade: true
    }
  )
  missions: mission[];

  @OneToMany(
    type => fournisseur,
    (fournisseur) => fournisseur,
    {
      nullable: true,
      cascade: true
    }
  )
  fournisseur:fournisseur [];

}
