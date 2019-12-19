import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('serverCom') private readonly client: ClientProxy, private readonly appService: AppService) {}

  @Get('app')
  getHello(): string {
    this.client.send<boolean>({ cmd: 'MESSAGE_FROM_SERVER2'}, []).toPromise();
    return this.appService.getHello();
  }
}
