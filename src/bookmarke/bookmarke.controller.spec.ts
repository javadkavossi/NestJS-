import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkeController } from './bookmarke.controller';

describe('BookmarkeController', () => {
  let controller: BookmarkeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookmarkeController],
    }).compile();

    controller = module.get<BookmarkeController>(BookmarkeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
