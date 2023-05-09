import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto) : Promise<{token: string}>{
        return this.authService.signUp(signUpDto)
    }

    @Post('/signin')
    signIn(@Body() loginDto: LoginDto) : Promise<{token: string}>{
        return this.authService.signIn(loginDto)
    }
}
