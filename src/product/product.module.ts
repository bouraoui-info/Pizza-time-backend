import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importez TypeOrmModule

import { SharedModule } from '../shared/shared.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Product]), // Utilisez TypeOrmModule.forFeature() avec l'entité Product
    SharedModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
