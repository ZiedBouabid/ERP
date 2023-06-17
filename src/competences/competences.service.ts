import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { competences } from './entities/competences.entity';

@Injectable()
export class CompetencesService {

    constructor(@InjectRepository(competences) private competencesRepository: Repository<competences>,){
        
    }

    async getCompetences(): Promise<competences[]> {
        return await this.competencesRepository.find();
      }
}
