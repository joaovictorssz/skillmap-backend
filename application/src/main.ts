import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'
import  * as  process from 'process'
async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
