import { Component, OnInit } from '@angular/core';
import { MusicappService } from 'src/app/services/musicapp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor( private musicaap: MusicappService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    console.log(termino);
    this.musicaap.getArtista( termino )
      .subscribe( (data: any ) => {
        console.log(data);
        this.artistas = data;
      });
  }

}
