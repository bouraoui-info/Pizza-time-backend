import { Body, Controller, Post, Get } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { Payload } from '../types/payload';
import { LoginDTTO, RegisterDTTO } from './auth.dto';
import { authService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: authService,
    ) { }

    @Post('login')
    async login(@Body() userDTO: LoginDTTO) {
        const user = await this.userService.findByLogin(userDTO);
        const payload: Payload = {
            username: user.username,
            seller: user.seller,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

    @Post('register')
    async register(@Body() registerDTO: RegisterDTTO) {
        const user = await this.userService.createFromDTO(registerDTO);
        const payload: Payload = {
            username: user.username,
            seller: user.seller,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
}
