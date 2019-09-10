import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  pure:true
})
export class ImageUrlPipe implements PipeTransform {

  transform(baseUrl: string,vechicleUrl:string,imageUrl, ...args: any[]): any {
    return `${baseUrl}${vechicleUrl}${imageUrl[0].url}`;
  }

}
