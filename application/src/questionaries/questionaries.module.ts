import { Module } from '@nestjs/common';
import { QuestionariesController } from './questionaries.controller';
import { QuestionariesService } from './questionaries.service';
import { DatabaseModule } from 'database/database.module';
import { questionariesProvider } from './questionaries.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionariesController],
  providers: [QuestionariesService, ...questionariesProvider]
})
export class QuestionariesModule {}
