import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [UsersModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
