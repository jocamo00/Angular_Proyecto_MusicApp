import { Component, OnInit } from '@angular/core';
import { MusicappService } from 'src/app/services/musicapp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor( private musicaap: MusicappService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    console.log(termino);
    // Mientras esta cargando la data loading true
    this.loading = true;

    this.musicaap.getArtistas( termino )
      .subscribe( (data: any ) => {
        console.log(data);
        this.artistas = data;

        // Cuando ya ha cargado la data ponemos el loading a false
        this.loading = false;
      });
  }

}
