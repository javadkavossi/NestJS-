import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarksService {
    private bookmarks =[{

        id:1,
        url:"http://javadkavossi.com",
        description:"javad kavossi"
    }  
   ];
    findAll(){
        return this.bookmarks;
    }
}
