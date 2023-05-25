import { UsersService } from './users.service';
import { Controller, Param, Put } from '@nestjs/common';
import {Post, Body, Get} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/users.interface';

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

    @Get(':email')
    async listUserByEmail(@Param() param: string){
        const user = await this.usersService.listByEmail(param)
        return user
    }

    @Put("/update/:id")
    async updateUser(@Param('id') userId: string, @Body() updatedUser: Partial<User>): Promise<User> {
        return this.usersService.updateUser(userId, updatedUser);
      }
    
}
