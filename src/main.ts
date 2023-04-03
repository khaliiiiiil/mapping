import { NestFactory } from '@nestjs/core';
import { MapModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MapModule);
  await app.listen(3000);
}
bootstrap();
