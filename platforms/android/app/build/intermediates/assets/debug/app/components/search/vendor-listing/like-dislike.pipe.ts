import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'likeDislike'
})
export class LikeDislikePipe implements PipeTransform{
    transform(rating: number, like: boolean){
        // Checking for undefined param
        if (rating === undefined){ return '??' };
        switch(like){
            case true:
                return Math.round((rating / 5.0) * 100).toString() + '%';
            case false:
                return Math.round((1 - (rating / 5.0)) * 100).toString() + '%';
            default:
                console.log('LikeDislikePipe Failed.');
                return '??';
        }
    }
}

