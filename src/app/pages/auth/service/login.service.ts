import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({ 
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:Observable<firebase.default.User>;

  constructor(
    private nav: NavController,
    private auth: AngularFireAuth,
    private toast: ToastController
  ) {
    this.isLoggedIn = auth.authState;
  }

  login(user){
    this.auth.signInWithEmailAndPassword(user.email, user.password).
    then(() => this.nav.navigateForward('home')).catch(()=>this.showError());
    
  }

  private async showError(){
    const ctrl = await this.toast.create({
      message: 'Dados de acesso incorretos',
      duration: 3000
    });
    ctrl.present();
  }

  recoverPass(data){
    this.auth.sendPasswordResetEmail(data.email).
    then(()=> this.nav.navigateBack('auth')).
    catch(() => {
      this.showError();
    });
  }

  createUser(user){
   this.auth.createUserWithEmailAndPassword
   (user.email, user.password).then(credentials => console.log(credentials));
  }


  logout(){
    this.auth.signOut();
    this.nav.navigateBack('auth').then(this.refresh);
  }

  refresh(){
    location.reload();
  }
}
