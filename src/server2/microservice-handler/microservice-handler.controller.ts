import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('microservice-handler')
export class MicroserviceHandlerController {
  @MessagePattern({ cmd: 'MESSAGE_FROM_SERVER2'})
  getMessageToServer2(): boolean {
    // tslint:disable-next-line:no-console
    console.log('Server 2 - message received');
    return true;
  }
}
