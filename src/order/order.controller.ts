import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDTO } from '../order/order.dto';
import { User } from "../utilities/user.decorator";
import { AuthGuard } from '@nestjs/passport';
import { User as UserDocument } from '../types/user';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from 'src/models/order.schema';



 @ApiTags('Orders')

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrdersService) { }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get all orders' }) // Description de l'opération pour Swagger
  @ApiBearerAuth() // Spécification que l'authentification se fait via JWT Bearer token
  @ApiResponse({ status: 200, description: 'List of all orders', type: Order, isArray: true }) // Réponse Swagger pour le succès de la requête
  listOrders(@User() { id }: any) {
    return this.orderService.listOrdersByUser(id);
  }


  @Post()
  // @UseGuards(AuthGuard('jwt'))
  // @ApiOperation({ summary: 'Create a new order' })
  // @ApiResponse({ status: 201, description: 'Order created successfully', type: Order }) // Réponse Swagger pour la création réussie de la commande
  async createOrder(@Body() order:Order) {
    console.log({order});
    
    return await this.orderService.createOrder(order);
  }
}