import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private builder: FormBuilder,
    private service: LoginService 
  ) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(19)]],
      snome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(29)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      //confirm_pass: ['',[Validators.required, Validators.minLength(8)]] 
    });
  }

  createUser(){
    const user = this.loginForm.value;
    this.service.createUser(user);
  }

}
