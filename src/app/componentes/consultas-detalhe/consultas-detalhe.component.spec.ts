import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasDetalheComponent } from './consultas-detalhe.component';

describe('ConsultasDetalheComponent', () => {
  let component: ConsultasDetalheComponent;
  let fixture: ComponentFixture<ConsultasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
