import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';



@Module({
  imports: [BookmarksModule],

})
export class AppModule {}
