import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesComponent } from './meus-exames.component';

describe('ExamesComponent', () => {
  let component: ExamesComponent;
  let fixture: ComponentFixture<ExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
