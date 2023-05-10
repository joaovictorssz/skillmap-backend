import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/google/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, TopicsModule, AuthModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
