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
      'Authorization': 'Bearer BQA9x2wwI6zMQxydiKIl19WKZ-jf7OMx80amjoXBUrumOrfua7Qd8AHwJJ4rbbCVWoHHcNA1MAi2JRN_9oI'
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
  getArtistas( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      // Si la función flecha tiene una unica linea y es el return se puede hacer lo siguiente
      // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['artists'].items ));
  }

  // Método para mostrar un artista por id
  getArtista( id: string ){
    return this.getQuery(`artists/${ id }`);
      // Si la función flecha tiene una unica linea y es el return se puede hacer lo siguiente
      // tslint:disable-next-line:no-string-literal
      // .pipe( map( data => data['artists'].items ));
  }

  // Método para mostrar canciones top de un artista
  getTopTracks( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
      // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['tracks']));
  }
}
