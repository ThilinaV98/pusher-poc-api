import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {IoAdapter} from "@nestjs/platform-socket.io";
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.use(cors());

  // Use the Socket.IO adapter
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3000);
}
bootstrap();
