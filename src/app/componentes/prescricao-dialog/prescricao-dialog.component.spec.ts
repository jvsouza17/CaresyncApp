import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescricaoDialogComponent } from './prescricao-dialog.component';

describe('PrescricaoDialogComponent', () => {
  let component: PrescricaoDialogComponent;
  let fixture: ComponentFixture<PrescricaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescricaoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescricaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
