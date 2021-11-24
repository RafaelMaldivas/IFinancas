import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss'],
})
export class DashCardComponent implements OnInit {
  @Input() titulo;
  @Input() icone;
  @Input() valor;
  @Input() tipo;
  @Input() cor;
  @Input() num;


  constructor(
    
  ) { }

  ngOnInit() {
    switch (this.tipo) {
      case 'receber': this.receber(); break;
      case 'pagar': this.pagar(); break;
      case 'saldo': this.saldo(); break;
    }
  }


  receber() {
    this.titulo = this.titulo ? this.titulo : 'Contas a Receber';
    this.icone = this.icone ? this.icone : 'trending-up';
    this.cor = this.cor ? this.cor : 'success';
  }

  pagar() {
    this.titulo = this.titulo ? this.titulo : 'Contas a Pagar';
    this.icone = this.icone ? this.icone : 'trending-down';
    this.cor = this.cor ? this.cor : 'danger';
  }

  saldo() {
    this.titulo = this.titulo ? this.titulo : 'Saldo';
    this.icone = this.icone ? this.icone : 'logo-usd';
    this.cor = this.cor ? this.cor : 'warning';    
    }

}
