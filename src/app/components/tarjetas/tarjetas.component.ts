import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  // Recibe la información de HomeComponent.ts y SearchComponent.ts
  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  verArtista( item: any){
    let artistaId;
    // En home tenemos albunes que contienen el artista y en search tenemos artistas
    // Entonces dependiendo de si estamos en una página o otra hacemos lo oportuno para acceder al id del artista
    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId ]);
  }

}
