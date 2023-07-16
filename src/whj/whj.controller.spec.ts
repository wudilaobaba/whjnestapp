import { Test, TestingModule } from '@nestjs/testing';
import { WhjController } from './whj.controller';

describe('WhjController', () => {
  let controller: WhjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhjController],
    }).compile();

    controller = module.get<WhjController>(WhjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
