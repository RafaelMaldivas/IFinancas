import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { CalculadoraPage } from './calculadora.page';

describe('A página Calculadora', () => {
  let view;
  let model: CalculadoraPage;
  let fixture: ComponentFixture<CalculadoraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraPage);
    model = fixture.componentInstance;
    view = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(model).toBeTruthy();
  });


  it('deve renderizar o titulo', () => {
    const result = view.querySelector('.title').textContent;
    expect(result).toEqual('Calculadora');

  });


});
