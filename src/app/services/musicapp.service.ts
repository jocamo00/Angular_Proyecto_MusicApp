import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicappService {

  constructor( private http: HttpClient ) {}

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQCYFMnx9gssjvTffxsV51nKUt5SebNKgMn5-0sqT6FWdZMjzYIzjRwI1bJoWvHdNuobYyHQl1j3GA4XSmw'
    });

    return this.http.get(url, { headers });
  }

  // Método para obtener las ultimas canciones
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => {
        // tslint:disable-next-line:no-string-literal
        return data['albums'].items;
      }));
  }

  // Método para obtener artistas en la búsqueda
  getArtista( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      // Si la función flecha tiene una unica linea y es el return se puede hacer lo siguiente
      // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['artists'].items ));
  }
}
