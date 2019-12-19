import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Server2Module } from './server2/server2.module';
import * as Express from 'express';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const server0 = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});
  const server1 = await NestFactory.create<NestExpressApplication>(Server2Module, {cors: true});

  // implement microservice to 2 servers
  server0.connectMicroservice({
    transport: Transport.TCP,
    options: { port: 9002 },
  });
  server1.connectMicroservice({
    transport: Transport.TCP,
    options: { port: 9003 },
  });

  // Run all microservice by server
  await server0.startAllMicroservicesAsync();
  await server1.startAllMicroservicesAsync();

  // Start servers
  await server0.listen(9000);
  await server1.listen(9001);
}

bootstrap();
