import { Controller, Get, Post, Body,  UseGuards } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDTO } from '../order/order.dto';
import {User}from "../utilities/user.decorator"; 
import { AuthGuard } from '@nestjs/passport';
import { User as UserDocument } from '../types/user';





@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()

  @UseGuards(AuthGuard('jwt'))
listOrders(@User() {id}:any){
    return this.orderService.listOrdersByUser(id);
  }


  @Post()
  @UseGuards(AuthGuard('jwt'))
  createOrder( @Body() createOrderDto: CreateOrderDTO, @User() {id}:any) {
    return this.orderService.createOrder(createOrderDto,id);
  }
}