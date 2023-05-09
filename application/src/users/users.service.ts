import { CreateUserDto } from './dtos/create-user.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_MODEL')
        private userModel: Model<User>
    ){}


    //create user

    async create(createUserDto: CreateUserDto): Promise<User>{
        
        const createdUser = new this.userModel(createUserDto)
        return createdUser.save()
        
    }

    // list all

    async listAll() : Promise<User[]>{
        return this.userModel.find().exec()
    }

    //list by name

    async listByName(params: String) : Promise<User[]>{
        const user = (await this.userModel.find(params))
        return user
    }

}
