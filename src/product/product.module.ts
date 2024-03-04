import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importez TypeOrmModule
import { Productschema } from '../models/product.shema'; // Importez votre entité Product

import { SharedModule } from '../shared/shared.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Productschema]), // Utilisez TypeOrmModule.forFeature() avec l'entité Product
    SharedModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
