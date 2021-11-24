import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/service/login.service';
import { ContasService } from '../contas/service/contas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  conta = {
    pagar: { num: 0, valor: 0 }, receber: { num: 0, valor: 0 }, saldo: { num: 0, valor: 0 }
  };

  date = new Date().toISOString();

  constructor(
    private service: LoginService,
    private contas: ContasService,
  ) { }

  ionViewWillEnter() {
    this.atualizaConta();
  }

  atualizaConta() {
    this.contas.total('receber', this.date).subscribe(
      (x: any) => {
        this.conta.receber = x;

        this.contas.total('pagar', this.date).subscribe(
          (y: any) => {
            this.conta.pagar= y;  
            this.atualizaSaldo();
          }
        );
      }
    );
  }

  atualizaSaldo() {
    this.conta.saldo.num = this.conta.receber.num + this.conta.pagar.num;
    this.conta.saldo.valor = this.conta.receber.valor - this.conta.pagar.valor;
  }

  logout() {
    this.service.logout();
  }



}
