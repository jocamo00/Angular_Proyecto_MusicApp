import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  // Recibe la información de HomeComponent.ts y SearchComponent.ts
  @Input() items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
