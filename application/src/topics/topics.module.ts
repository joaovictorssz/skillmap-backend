import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { DatabaseModule } from 'database/database.module';
import { topicsProvider } from './topics.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [TopicsController],
  providers: [TopicsService,
  ...topicsProvider]
})
export class TopicsModule {}
