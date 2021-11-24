import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
    constructor() { }

  divide(dividendo, divisor): number | string{
    if (divisor == 0){
      return 'Não existe divisão por zero!!'
    }
    return dividendo/divisor;
  }
}
