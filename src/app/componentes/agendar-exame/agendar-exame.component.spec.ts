import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarExameComponent } from './agendar-exame.component';

describe('AgendarExameComponent', () => {
  let component: AgendarExameComponent;
  let fixture: ComponentFixture<AgendarExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarExameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
