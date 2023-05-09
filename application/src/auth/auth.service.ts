import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/interfaces/users.interface';
import { JwtService } from '@nestjs/jwt'
import { UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './dtos/sign-up.dto';
import { LoginDto } from './dtos/login.dto';
@Injectable()
export class AuthService {

    constructor(
        @Inject('USERS_MODEL')
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async signUp(signUpDto: SignUpDto) : Promise<{token: string}>{
        const { name, last_name, email, phone_number, birth_date, password } = signUpDto
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new this.userModel({
            name,
            last_name,
            email,
            phone_number,
            birth_date,
            password: hashedPassword
        })
        user.save()

        const token = this.jwtService.sign({id: user._id})
        return {token}
    }

    async signIn(loginDto: LoginDto) : Promise<{token: string}>{
        const { email, password } = loginDto

        const user = await this.userModel.findOne({email})

        if(!user){
            throw new UnauthorizedException('Credentials not matched')
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException('Password is incorrect typed')
        }

        const token = this.jwtService.sign({id: user._id})
        return {token}
    }

}
