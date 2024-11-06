import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasDetalheComponent } from './vacinas-detalhe.component';

describe('VacinasDetalheComponent', () => {
  let component: VacinasDetalheComponent;
  let fixture: ComponentFixture<VacinasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacinasDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
