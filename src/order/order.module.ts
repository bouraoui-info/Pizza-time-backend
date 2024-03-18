import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/models/order.schema";
import { SharedModule } from "src/shared/shared.module";
import {OrderController} from './order.controller';
import {OrdersService} from './order.service'; 



@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        SharedModule
    ],
    controllers: [OrderController],
    providers: [OrdersService]
})
export class OrderModule {}