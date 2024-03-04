import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { AuthController } from './auth.controller';
import { authService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [SharedModule],
    controllers: [AuthController],
    providers: [authService, JwtStrategy],
})
export class AuthModule { }