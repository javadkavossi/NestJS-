import { Injectable } from '@nestjs/common';
import { Bookmarks } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

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
}
