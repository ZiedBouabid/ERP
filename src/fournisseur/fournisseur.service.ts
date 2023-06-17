import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { certification } from 'src/certification/entities/certification.entity';
import { Repository } from 'typeorm';
import { fournisseur } from './entities/fournisseur.entity';

@Injectable()
export class FournisseurService {

    constructor(@InjectRepository(fournisseur) private missionRepository: Repository<fournisseur>,){
        
    }
    async getFournisseurs(): Promise<fournisseur[]> {
        return await this.missionRepository.find({
          relations: {
            competences : true,
            produits : true,
            certifications: true
        },
        });
      }
}
