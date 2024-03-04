import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importez TypeOrmModule
import { User } from '../models/user.entity'; // Importez l'entité User

import { HttpExceptionFilter } from './http-exception.filter';
import { LoggingInterceptor } from './logging.interceptor';
import { UserService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Utilisez TypeOrmModule.forFeature() avec l'entité User
  ],
  providers: [
    UserService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [UserService],
})
export class SharedModule {}
