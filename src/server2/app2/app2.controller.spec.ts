import { Test, TestingModule } from '@nestjs/testing';
import { App2Controller } from './app2.controller';

describe('App2 Controller', () => {
  let controller: App2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [App2Controller],
    }).compile();

    controller = module.get<App2Controller>(App2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
