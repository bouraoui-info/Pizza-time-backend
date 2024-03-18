// Importez votre entité Product

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';

@Injectable()

export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product >,
  ) {}


  async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findProductById(id: string): Promise<Product> {
    return await this.productRepository.findOne({where:{id}}); 
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}

