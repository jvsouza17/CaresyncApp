import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoVacinasComponent } from './cartao-vacinas.component';

describe('CartaoVacinasComponent', () => {
  let component: CartaoVacinasComponent;
  let fixture: ComponentFixture<CartaoVacinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoVacinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
