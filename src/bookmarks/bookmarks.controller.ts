import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmarks } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
    constructor(private bookmarksService: BookmarksService) { }

    // @Get()
    // findAll(): Bookmarks[] {
    //     return this.bookmarksService.findAll();
    // }


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

    @Get()
    find(@Query() getBookmarkDto: GetBookmarkDto): Bookmarks[] {
        if (Object.keys(getBookmarkDto).length) {
            return this.bookmarksService.find(getBookmarkDto);
        }
        return this, this.bookmarksService.findAll()
    }

    @Delete('/:id')
    deleteBookmarks(@Param('id') id: string): void {
        return this.bookmarksService.deleteBookmark(id);
    }


    @Patch('/:id/description')
    updateBookmark(
        @Param('id') id: string,
        @Body('description') description: string,
    ): Bookmarks {
        return this.bookmarksService.updateBookmark(id, description);
    }


}
