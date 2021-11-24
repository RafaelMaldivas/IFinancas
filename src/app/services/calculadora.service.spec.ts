import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('A classe Calculadora', () => {
  let calculadora: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculadora = TestBed.inject(CalculadoraService);
  });
  //funcionalidade
  describe('deve realizar divisões', () => {

    //caso de teste
    it('entre números inteiros', () => {
      const result = calculadora.divide(16, 8);
      expect(result).toBe(2);
    });

    it('com execessão do zero', () => {
      const result = calculadora.divide(8, 0);
      expect(typeof result).toEqual('string');
    })
  });

});
