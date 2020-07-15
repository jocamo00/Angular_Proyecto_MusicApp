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
      'Authorization': 'Bearer BQBARyV55UgLCJNpQgnbHFr4psK0mbab5a4lAX_tIlm0a2oIEa5XH4r_RCor9UM-r52lJBIxJVvs4si-fYI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
