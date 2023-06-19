import { JoinTable, ManyToMany, Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
import { mission } from 'src/mission/entities/mission.entity';
@Entity()
export class produit extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	nom: string;

	@ManyToOne(()=> mission,(mission) => mission.produits)
	mission : mission
	



	
}
