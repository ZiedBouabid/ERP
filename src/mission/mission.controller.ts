import { Controller, Get } from '@nestjs/common';
import { mission } from './entities/mission.entity';
import { MissionService } from './mission.service';

@Controller('missions')
export class MissionController {
    constructor(private missionService:  MissionService){

    }

  @Get('getMissions')
  async getUser(): Promise<mission[]> {
    return await this.missionService.getMissions();

  }
}
