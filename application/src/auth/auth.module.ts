import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose'
import { userSchema } from 'src/users/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config'
import { DatabaseModule } from './../../database/database.module';
import { userProvider } from 'src/users/users.providers';


@Module({
  imports: [
  PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      useFactory: () =>{
        return {
          secret: 'skillmap@inovatec',
          signOptions:{
            expiresIn: '3d'
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
