import { JoinTable, ManyToMany, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
@Entity()
export class produit extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;

  



  
}
