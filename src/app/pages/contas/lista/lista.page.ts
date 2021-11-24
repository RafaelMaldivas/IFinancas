import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContasService } from '../service/contas.service';

@Component({
  selector: 'pagar',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listaContas;
  tipo;
  constructor(
    private service: ContasService,
    private alert: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    const tipo = this.router.url.split('/')
    this.tipo = tipo[2].charAt(0).toUpperCase()+tipo[2].slice(1)
    this.service.lista(tipo[2]).subscribe(x => this.listaContas = x)
  }

  async remove(conta) {
    const confirm = await this.alert.create({
      header: 'Exluir Registro de Contas',
      message: 'Deseja Realmente Excluir esta Conta??',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Deletar',
        handler: () => this.service.remove(conta)
      }]
    });

    confirm.present();
  }

  async editar(conta) {
    const confirm = await this.alert.create({
      header: 'Editar os dados da Conta a ' + this.tipo,
      inputs: [{
        type: 'text', name: 'parceiro', label: 'Parceiro', value: conta.parceiro
      }, {
        type: 'text', name: 'descricao', label: 'Descrição', value: conta.descricao
      }, {
        type: 'date', name: 'data', label: 'Data Validade', value: conta.data
      }, {
        type: 'number', name: 'valor', label: 'Valor', value: conta.valor
      }, {
        type: 'text', name: 'status', label: 'Status da Conta', value: conta.status
      }],
      buttons: [{
        text: 'Cancelar Edição',
        role: 'cancel'
      }, {
        text: 'Salvar Edição',
        handler: (data) => {
          const obj = {...conta, ...data};
          this.service.editar(obj);
        }
      }]
    });
    confirm.present();
  }

}