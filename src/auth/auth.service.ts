import { Injectable } from "@nestjs/common";
import {Payload} from '../types/payload';
import { UsersService } from "../users/users.service";
import { sign } from 'jsonwebtoken';
@Injectable()
export class authService {

    constructor(private userService: UsersService) { }
    async signPayload(payload: Payload) {
        return sign(payload, process.env.SECRET_KEY, { expiresIn: "12h" });
    }

    async validateUser(payload: Payload) {

        return await this.userService.findByPayload(payload);


    }



}