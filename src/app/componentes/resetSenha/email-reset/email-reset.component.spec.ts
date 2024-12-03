import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailResetComponent } from './email-reset.component';

describe('EmailResetComponent', () => {
  let component: EmailResetComponent;
  let fixture: ComponentFixture<EmailResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
