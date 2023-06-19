import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { mission } from './entities/mission.entity';

@Injectable()
export class MissionService {
		
		constructor(@InjectRepository(mission) private missionRepository: Repository<mission>,){
				
		}
		
		async getMissions(): Promise<mission[]> {
				return await this.missionRepository.find({
						relations: {
							produits : true,
					},
					});
		}

		async saveMission(mission : mission): Promise<mission> {
				try{
					return await this.missionRepository.save(mission)
				}
				catch(e ){
					console.log(e)
				}
		}

}
