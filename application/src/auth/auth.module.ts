import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './../../database/database.module';
import { userProvider } from 'src/users/users.providers';


@Module({
  imports: [
  PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      useFactory: () =>{
        return {
          secret: process.env.JWT_SECRET,
          signOptions:{
            expiresIn: process.env.JWT_EXPIRES
          }
        }
      }
    }),
    DatabaseModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ...userProvider
  ]
})
export class AuthModule {}
