import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

if (process.env.IS_PROUCTION) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('module-alias/register');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // This will enable validation globally for all the endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
