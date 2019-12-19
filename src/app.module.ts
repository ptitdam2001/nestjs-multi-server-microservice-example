import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
// import { Server2Module } from './server2/server2.module';

@Module({
  imports: [
    ClientsModule.register([{ name: 'serverCom', transport: Transport.TCP, options: { port: 9003, host: 'localhost' } }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
