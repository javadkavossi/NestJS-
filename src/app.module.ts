import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { BookmarkeController } from './bookmarke/bookmarke.controller';


@Module({
  imports: [BookmarksModule],
  controllers: [BookmarkeController],
})
export class AppModule {}
