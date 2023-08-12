import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmarks } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
    constructor(private bookmarksService: BookmarksService) { }

    @Get()
    findAll(): Bookmarks[] {
        return this.bookmarksService.findAll();
    }


    // ----------------- not DTO 
    // @Post()
    // createBookmark(@Body('url') url, @Body('description') description): Bookmarks {
    //     return this.bookmarksService.createBookmarks(url, description);
    // }

    @Post()
    createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmarks {
        return this.bookmarksService.createBookmarks(createBookmarkDto);
    }

    @Get('/:id')
    findById(@Param('id') id: string): Bookmarks {
        return this.bookmarksService.findById(id);
    }


}
