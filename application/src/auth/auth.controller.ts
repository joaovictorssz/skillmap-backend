import { Controller, Post, Body, Get, Param, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { LoginDto } from './dtos/login.dto';
import { GoogleOAuthGuard } from './google/google.oauth-guard';
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

    @Get()
    @UseGuards(GoogleOAuthGuard)
    async googleAuth(@Request() req) {}

    @Get('google-redirect')
    @UseGuards(GoogleOAuthGuard)
    googleAuthRedirect(@Request() req) {
    const user = this.authService.googleLogin(req);
    if(!user){
        return { msg: "Something went wrong"}
    }

    return user


  }


}
