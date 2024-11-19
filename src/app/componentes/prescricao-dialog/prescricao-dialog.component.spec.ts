import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescricaoDialogComponent } from './prescricao-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

describe('PrescricaoDialogComponent', () => {
  let component: PrescricaoDialogComponent;
  let fixture: ComponentFixture<PrescricaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescricaoDialogComponent, NavigationBarComponent],
      providers: [AuthenticationService],
      imports: [
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
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
