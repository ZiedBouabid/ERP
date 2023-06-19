import { mission } from './../../mission/entities/mission.entity';
import { ManyToMany, JoinTable, OneToMany, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, JoinColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { certification } from 'src/certification/entities/certification.entity';
import { competences } from 'src/competences/entities/competences.entity';
import { produit } from 'src/produit/entities/produit.entity';
import { PipelineDestinationPromiseFunction } from 'stream';
@Entity()
export class fournisseur extends BaseEntity{
 
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nom: string;

  @Column()
  description: string;

  @Column()
  tele: string;

  @Column({ unique: true })
  email: string;
  
  @OneToMany(type => certification,(certification) => certification.fournisseur,
    {
      nullable: true,
      cascade: true
    }
  )
  certifications: certification[];

  @OneToMany(type => mission,(mission) => mission.fournisseur,
    {
      nullable: true,
      cascade: true
    }
  )
  missions: mission[];

  @OneToMany(type => competences, (competences) => competences.fournisseur,
    {
      nullable: true,
      cascade: true
    }
  )
  competences: competences[];

  @ManyToMany(() => produit)
  @JoinTable({
      name: 'FournisseurProduit', 
      joinColumn: {
          name: "fournisseurId",
          referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "produitId",
          referencedColumnName: "id"
      } 
  })
  produits: produit[]; 
  }
