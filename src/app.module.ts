import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { MissionModule } from './mission/mission.module';
import { ProduitModule } from './produit/produit.module';
import { User } from './users/entities/user.entity';
import { mission } from './mission/entities/mission.entity';
import { fournisseur } from './fournisseur/entities/fournisseur.entity';
import { produit } from './produit/entities/produit.entity';
import { CompetencesModule } from './competences/competences.module';
import { CertificationModule } from './certification/certification.module';
import { certification } from './certification/entities/certification.entity';
import { competences } from './competences/entities/competences.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'zied',
      password: 'azertyS20645307',
      database: 'my_nestjs_project',
      entities: [User,mission,fournisseur,produit,certification,competences],
      synchronize: false,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    FournisseurModule,
    MissionModule,
    ProduitModule,
    CompetencesModule,
    CertificationModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
