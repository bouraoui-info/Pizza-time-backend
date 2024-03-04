import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Utiliser InjectRepository pour TypeORM
import { Repository } from 'typeorm';
import { Product } from '../types/products';
import { User } from '../types/user';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findByOwner(userId: string): Promise<Product[]> {
    return await this.productRepository.find({ where: { owner: userId } });
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async create(productDTO: CreateProductDTO, user: User): Promise<Product> {
    const product = this.productRepository.create({
      ...productDTO,
      owner: user, 
    });
    await this.productRepository.save(product);
    return product;
  }

  async update(
    id: string,
    productDTO: UpdateProductDTO,
    userId: string,
  ): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (userId !== product.owner.id) {
      throw new HttpException(
        'You do not own this product',
        HttpStatus.UNAUTHORIZED,
      );
    }
    this.productRepository.merge(product, productDTO);
    await this.productRepository.save(product);
    return product;
  }

  async delete(id: string, userId: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (userId !== product.owner.id) {
      throw new HttpException(
        'You do not own this product',
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.productRepository.remove(product);
    return product;
  }
}

