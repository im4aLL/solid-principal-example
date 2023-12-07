import { Test, TestingModule } from '@nestjs/testing';
import { SrpController } from './srp.controller';

describe('SrpController', () => {
  let controller: SrpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SrpController],
    }).compile();

    controller = module.get<SrpController>(SrpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
