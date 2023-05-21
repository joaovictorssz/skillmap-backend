import { UsersService } from './users.service';
import { Controller, Param } from '@nestjs/common';
import {Post, Body, Get} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post('create')
    async createUser(@Body() userInfo: CreateUserDto){
        const newUser = await this.usersService.create(userInfo)

        if(!newUser){
            return('user not created')
        }

        return {
            msg: 'User created successfully',
            user_info: newUser
        }
    }

    @Get('list_all')
    async listAll(){
        const users = await this.usersService.listAll()
        return users
    }

    @Get(':name')
    async listUserByName(@Param() param: string){
        const user = await this.usersService.listByName(param)
        return user
    }
}
