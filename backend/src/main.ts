import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from '../winston-config';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//    // Enable CORS
//    app.use(cors());
//    // Apply global validation pipe
//   app.useGlobalPipes(new ValidationPipe());

//   await app.listen(3000);
// }
// bootstrap();
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });

  // Enable CORS
  app.use(cors());

  // Apply global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();