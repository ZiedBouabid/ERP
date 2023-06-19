import { produit } from './../../produit/entities/produit.entity';
import { fournisseur } from './../../fournisseur/entities/fournisseur.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class mission extends BaseEntity{

  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  client: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  datedebut: Date;

  @Column()
  datefin: Date;

  @OneToOne(()=> fournisseur,(fournisseur) => fournisseur.missions)
  @JoinColumn()
  fournisseur : fournisseur;

  @OneToMany(type => produit, (produit) => produit.mission,
    {
      nullable: true,
      cascade: true
    }
  )
  produits : produit;


  @Column()
  statut: string;
}
