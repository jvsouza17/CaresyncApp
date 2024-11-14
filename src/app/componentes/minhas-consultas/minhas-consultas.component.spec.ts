import { ComponentFixture, TestBed } from '@angular/core/testing';

import { minhasConsultasComponent } from './minhas-consultas.component';

describe('minhasConsultasComponent', () => {
  let component: minhasConsultasComponent;
  let fixture: ComponentFixture<minhasConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [minhasConsultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(minhasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
