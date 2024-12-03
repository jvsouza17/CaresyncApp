import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaResetComponent } from './senha-reset.component';

describe('SenhaResetComponent', () => {
  let component: SenhaResetComponent;
  let fixture: ComponentFixture<SenhaResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenhaResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenhaResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
