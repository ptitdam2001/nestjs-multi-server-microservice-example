import { Controller, Get } from '@nestjs/common';

@Controller()
export class App2Controller {
  @Get('app2')
  main() {
    return {
      message: 'ok',
    };
  }
}
