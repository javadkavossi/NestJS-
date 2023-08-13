import { Injectable } from '@nestjs/common';
import { Bookmarks } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Injectable()
export class BookmarksService {
    private bookmarks: Bookmarks[] = [{

        id: uuid(),
        url: "http://javadkavossi.com",
        description: "javad kavossi"
    }
    ];

    findAll(): Bookmarks[] {
        return this.bookmarks;
    }

    // ------------------ Not Dto 

    // createBookmarks(url:string , description : string ){
    //     const bookmark:Bookmarks ={
    //         id:uuid(),
    //         url,
    //         description,
    //     };
    //     this.bookmarks.push(bookmark);
    //     return bookmark;
    // }



    createBookmarks(createBookmarkDto: CreateBookmarkDto): Bookmarks {
        const { url, description } = createBookmarkDto
        const bookmark: Bookmarks = {
            id: uuid(),
            url,
            description,
        };
        this.bookmarks.push(bookmark);
        return bookmark;
    }


    findById(id: string): Bookmarks {
        return this.bookmarks.find((bookmark) => bookmark.id == id);
    }

    find(getBookmarkDto: GetBookmarkDto): Bookmarks[] {

        let bookmarks = this.findAll();
        const { url, description } = getBookmarkDto;
        if (url) {

            bookmarks = bookmarks.filter(
                (bookmark) => bookmark.url.toLowerCase().includes(url),
            );
        }

        if (description) {

            bookmarks = bookmarks.filter(
                (bookmark) => bookmark.description.toLowerCase().includes(description),
            );
        }
        return bookmarks
    }


    deleteBookmark(id: string): void {
        this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id)
    }


    updateBookmark(id: string, description: string): Bookmarks {
        const bookmark = this.findById(id);
        bookmark.description = description;
        return bookmark;
    }


}
