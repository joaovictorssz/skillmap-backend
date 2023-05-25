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

    async listByEmail(params: String) : Promise<User>{
        const user = (await this.userModel.findOne(params))
        return user!    
    }

    //update: push saved questionaries

    async updateUser(userId: string, updatedUser: Partial<User>){
        const user = await this.userModel.findByIdAndUpdate(userId, updatedUser, { new: true });
        return user
    }

}
