import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Utiliser InjectRepository pour TypeORM
import { Repository } from 'typeorm';
import { User } from '../types/user';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  [x: string]: any;
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  async findByOwner(userId: string): Promise<Product[]> {
    // Trouver l'utilisateur par son identifiant
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // Utiliser l'utilisateur trouvé pour rechercher les produits associés
    return await this.productRepository.find({ where: { owner: user } });
  }

  async FindById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({where :{id}});
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
    id: string ,
    productDTO: UpdateProductDTO,
    userid: string,
  ): Promise<Product> {
    const product = await this.productRepository.findOne({where :{id}});
    if (userid !== product.owner.id) {
      throw new HttpException(
        'You do not own this product',
        HttpStatus.UNAUTHORIZED,
      );
    }
    this.productRepository.merge(product, productDTO);
    await this.productRepository.save(product);
    return product;
  }

  async delete(id: string, userid: string): Promise<Product> {
    const product = await this.productRepository.findOne({where :{id}});
    if (userid !== product.owner.id) {
      throw new HttpException(
        'You do not own this product',
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.productRepository.remove(product);
    return product;
  }
}

