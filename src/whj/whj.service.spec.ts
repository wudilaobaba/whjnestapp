import { Test, TestingModule } from '@nestjs/testing';
import { WhjService } from './whj.service';

describe('WhjService', () => {
  let service: WhjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhjService],
    }).compile();

    service = module.get<WhjService>(WhjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
