import { Component, OnInit } from '@angular/core';
import { MusicappService } from 'src/app/services/musicapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private musicapp: MusicappService ) {

    // Mientras esta cargando la data loading true
    this.loading = true;
    this.error = false;

    this.musicapp.getNewReleases()
      .subscribe( ( data: any ) => {
        this.nuevasCanciones = data;
        // Cuando ya ha cargado la data ponemos el loading a false
        this.loading = false;
      }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });

  }

  ngOnInit(): void {
  }

}
