import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TopicsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
