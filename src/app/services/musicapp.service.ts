import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicappService {

  constructor( private http: HttpClient ) {}

  // Método para obtener las ultimas canciones
  getNewReleases(){

    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQARyL42e9iouoqP7g2pjIuOMforOu9x0piWyCRGmoTeIstwvBFGJBqXC_Tmo_JjkN-yRJmU2kYa6qmrXKY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  // Método para obtener artistas en la búsqueda
  getArtista( termino: string ){

    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQARyL42e9iouoqP7g2pjIuOMforOu9x0piWyCRGmoTeIstwvBFGJBqXC_Tmo_JjkN-yRJmU2kYa6qmrXKY'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
