import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
@Entity()
export class certification extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(()=> fournisseur,(fournisseur) => fournisseur.certifications)
  fournisseur : fournisseur;
  
}