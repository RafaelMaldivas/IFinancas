import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NavController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DateHelper } from 'src/app/helpers/DateHelper';



@Injectable({
  providedIn: 'root'
})
export class ContasService {

  collection: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore,
    private nav: NavController,
    private toast: ToastController
  ) { }

  registrarConta(conta) {
    conta.id = this.db.createId();
    this.collection = this.db.collection('conta');
    return this.collection.doc(conta.id).set(conta).then(() => this.SuccessForm());
  }

  private async SuccessForm() {
    const ctrl = await this.toast.create({
      message: 'Formulário Salvo com Sucesso',
      duration: 3000
    });
    ctrl.present();
  }

  lista(tipo) {
    this.collection = this.db.collection('conta', rf => rf.where('tipoConta', '==', tipo));
    return this.collection.valueChanges(); //ouvir dinamicamente em tempo real os valores do firestore
  }


  remove(conta) {
    this.collection = this.db.collection('conta');
    this.collection.doc(conta.id).delete();
  }

  editar(conta) {
    const dados = conta
    dados.tipoConta = conta.tipoConta
    this.collection = this.db.collection('conta');
    this.collection.doc(conta.id).update(dados);

  }
  /**
   * Totalizar as contas de acordo com seu tipo
   * @param tipo: string - modalidade de contas  
   */
  total(tipo, date) {
    const aux =DateHelper.breakDate(date);
    const ano = aux.ano;
    const mes = aux.mes;

    this.collection = this.db.collection('conta', ref => ref.where('tipoConta','==',tipo).where('mes', '==', mes).where('ano','==',ano));
    return this.collection.get().pipe(map(snap => {
      let sum = 0;
      let cont = 0;
      let dataVenc = ''

      snap.docs.map(doc => {
        const conta = doc.data();
        const valor = parseFloat(conta.valor);
        dataVenc = conta.data
        sum += valor;
        cont++;
      });
      return { num: cont, valor:sum};
    }));

  }

}
