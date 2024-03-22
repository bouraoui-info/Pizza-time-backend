import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../models/order.schema";

import { CreateOrderDTO } from "./order.dto";
import { User } from "src/users/user.entity";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) { }

  async listOrdersByUser(userId: User): Promise<Order[]> {
    const orders = await this.orderRepository.find({
      where: {
        owner: userId,
      },
      relations: ["owner", "products"],
    });
    if (!orders || orders.length === 0) {
      throw new HttpException("Order not found", HttpStatus.NOT_FOUND);
    }
    return orders;
  }

  async createOrder(orderDTO: Order) {
    console.log({orderDTO});
    
    let order = {
      totalAmount: orderDTO.totalPrice,
      user:orderDTO.owner,
      product:orderDTO.products
    }

    
    // owner: userId;
    // order.products = orderDTO.products.map(product => product.product);
    const savedOrder = await this.orderRepository.save(order);
    return savedOrder;
  }

}
