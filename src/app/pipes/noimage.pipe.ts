import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {

    // Si no viene un array de imagenes
    if ( !images ){
      return 'assets/img/noimage.png';
    }

    // Si viene imagenes las muestra y si alguna no tiene devulve imagen por defecto
    if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }

    return null;
  }

}
