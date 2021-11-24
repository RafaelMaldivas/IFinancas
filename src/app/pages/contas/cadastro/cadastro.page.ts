
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DateHelper } from 'src/app/helpers/DateHelper';
import { ContasService } from '../service/contas.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  contasForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: ContasService,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contasForm = this.builder.group({
      tipoConta: ['', [Validators.required]],
      data: ['', Validators.required],
      parceiro: ['', [Validators.required, Validators.maxLength(20)]],
      descricao: ['', [Validators.required, Validators.maxLength(30)]],
      valor: ['', [Validators.min(1), Validators.required]],
      status: ['', [Validators.required]],
      dt_criacao: [new Date().toISOString()],

    });
  }

  voltar() {
    this.nav.navigateBack('home');
  }

  /**
   * Método Responsável por receber um dado e registrar no base de dados conta(firebase)
   */
  registrarConta() {
    //aqui eu vou enviar os dados do formulário para que fiquem registrados no firebase
    let bill = this.contasForm.value;
    const data = this.contasForm.get('data').value;
    bill = {...bill, ...DateHelper.breakDate(data)};
  
    this.service.registrarConta(bill).then(() => this.nav.navigateBack('home'));
  }

}
