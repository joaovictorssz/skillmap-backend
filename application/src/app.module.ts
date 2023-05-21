import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AWSController } from './aws/aws.controller';
import { AWSModule } from './aws/aws.module';
import { AWSService } from './aws/aws.service';

@Module({
  imports: [UsersModule, TopicsModule, AuthModule, ConfigModule.forRoot({isGlobal:  true}), AWSModule],
controllers: [AppController, AWSController],
  providers: [AppService,  AWSService],
})
export class AppModule {}
