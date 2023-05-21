import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProvider } from './users.providers';
import { DatabaseModule } from '../../database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

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
    })
    ,
    DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...userProvider,
  ],
})
export class UsersModule {}