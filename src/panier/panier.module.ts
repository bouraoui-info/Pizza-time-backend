import { Module } from '@nestjs/common';
import { PanierService } from './panier.service';
import { PanierController } from './panier.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Panier} from './panier.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({  imports:[
  TypeOrmModule.forFeature([Panier]),
  
],
  providers: [PanierService],
  controllers: [PanierController]
})
export class PanierModule {}