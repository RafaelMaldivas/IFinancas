import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from '../contas/cadastro/cadastro.page';
import { RelatorioPage } from '../contas/relatorio/relatorio.page';
import { ListaPage } from './lista/lista.page';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'pagar', component: ListaPage },
      { path: 'receber', component: ListaPage },
      { path: 'relatorio', component: RelatorioPage },
      { path: 'cadastro', component: CadastroPage },

    ]
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then(m => m.ListaPageModule)
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)],
  declarations: [
    ListaPage,
    RelatorioPage,
    CadastroPage
  ]
})
export class ContasRoutingModule { }
