import { Component, OnInit } from '@angular/core';
import { MusicappService } from 'src/app/services/musicapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private musicapp: MusicappService) {

    this.musicapp.getNewReleases()
      .subscribe( ( data: any ) => {
        this.nuevasCanciones = data;
      });

  }

  ngOnInit(): void {
  }

}
