import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesDetalheComponent } from './exames-detalhe.component';

describe('ExamesDetalheComponent', () => {
  let component: ExamesDetalheComponent;
  let fixture: ComponentFixture<ExamesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamesDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
