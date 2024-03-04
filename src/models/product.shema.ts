// product.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Product } from '../types/products';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) 
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findProductById(id: any): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  async deleteProduct(id:any): Promise<void> {
    await this.productRepository.delete(id);
  }
}
