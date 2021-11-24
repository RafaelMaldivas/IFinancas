import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  constructor() {}
  screen = "";
  a;
  b;
  c;
  d="";
  e="";

  ngOnInit(): void{

  }

inputValue(value){
  
  if((this.b=="+")||(this.b=="-")||(this.b=="*")||(this.b=="/")){
    
    this.d=this.d+value;
    this.screen = this.screen+value;
    this.c = this.d;
  }else{

    this.screen = this.screen+value;
  }
}

condition(value){
  this.screen = this.screen+value
  this.b = value
}

clear(){

  this.screen = "";
  this.a = "";
  this.b = "";
  this.c = "";
  this.d="";

}

objectArray = [];

result(){
  if(this.b=="+"){

    this.screen=this.screen+"+"+(parseInt(this.a)+parseInt(this.c)).toString();
    this.screen=(parseInt(this.screen)+parseInt(this.c)).toString();

    this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
    console.log(this.objectArray)
  }

  if(this.b=="-"){
    this.screen = this.screen+"="+(parseInt(this.a)-parseInt(this.c)).toString();
    this.screen = (parseInt(this.screen)-parseInt(this.c)).toString();
  }

  if(this.b=="*"){
    this.screen = this.screen+"="+(parseInt(this.a)*parseInt(this.c)).toString();
    this.screen = (parseInt(this.screen)*parseInt(this.c)).toString();
  }

  if(this.b=="/"){
    this.screen = this.screen+"="+(parseInt(this.a)/parseInt(this.c)).toString();
    this.screen = (parseInt(this.screen)/parseInt(this.c)).toString();
  }
}

}
