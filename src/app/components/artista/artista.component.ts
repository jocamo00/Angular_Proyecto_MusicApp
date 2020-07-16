import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicappService } from 'src/app/services/musicapp.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private musicapp: MusicappService ) {

    // Mientras esta cargando la data loading true
    this.loadingArtist = true;

    // Se suscribe a cualquier cambio que haya en los parametros
    this.router.params.subscribe( params => {
      // tslint:disable-next-line:no-string-literal
      this.getArtista(params['id']);
      // tslint:disable-next-line:no-string-literal
      this.getTopTracks( params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista( id: string) {
    // Mientras esta cargando la data loading true
    this.loadingArtist = true;

    this.musicapp.getArtista( id )
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;

        // Cuando ya ha cargado la data ponemos el loading a false
        this.loadingArtist = false;
      });
  }

  getTopTracks( id: string){
    this.musicapp.getTopTracks( id )
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

}
