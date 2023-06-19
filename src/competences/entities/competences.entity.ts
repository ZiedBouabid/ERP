import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, ManyToMany, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
@Entity()
export class competences extends BaseEntity{
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  type: string;
  
  @ManyToOne(()=> fournisseur,(fournisseur) => fournisseur.competences)
  fournisseur : fournisseur
}