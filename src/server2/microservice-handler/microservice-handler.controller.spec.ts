import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceHandlerController } from './microservice-handler.controller';

describe('MicroserviceHandler Controller', () => {
  let controller: MicroserviceHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceHandlerController],
    }).compile();

    controller = module.get<MicroserviceHandlerController>(MicroserviceHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
