import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  //* Este ValidationPipe se va a encargar de validar cada uno de mi endpoints

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //* Asi se ocupa CORS
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
