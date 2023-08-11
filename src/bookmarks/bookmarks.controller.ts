import { Controller, Get } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
    constructor(private bookmarksService : BookmarksService){}
    
    @Get()
    findAll(){
        return this.bookmarksService.findAll();
    }
    
}
