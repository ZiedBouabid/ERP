import { Controller, Get } from '@nestjs/common';
import { fournisseur } from './entities/fournisseur.entity';
import { FournisseurService } from './fournisseur.service';

@Controller('fournisseur')
export class FournisseurController {
    constructor(private fournisseurService:  FournisseurService){

    }
  @Get('getfournisseurs')
  async getUser(): Promise<fournisseur[]> {
    return await this.fournisseurService.getFournisseurs();

  }
}
