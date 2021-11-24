import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopoLoginComponent } from './component/topo-login/topo-login.component';
import { ForgotPage } from './forgot/forgot.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
 { path: '', children:[
    {path: '', component: LoginPage},
    {path: 'forgot', component: ForgotPage},
    {path: 'register', component: RegisterPage}
  ]
}
];

@NgModule({
  imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[
    LoginPage,
    ForgotPage,
    RegisterPage,
    TopoLoginComponent
  ]
})
export class AuthRoutingModule { }
