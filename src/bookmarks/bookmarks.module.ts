import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';

@Module({
  providers: [BookmarksService],
  controllers: [BookmarksController]
})
export class BookmarksModule {}
