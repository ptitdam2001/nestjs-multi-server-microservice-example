import { Module } from '@nestjs/common';
import { App2Controller } from './app2/app2.controller';
import { MicroserviceHandlerController } from './microservice-handler/microservice-handler.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
  ],
  controllers: [App2Controller, MicroserviceHandlerController],
})
export class Server2Module {}
