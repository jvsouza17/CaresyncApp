import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarExameComponent } from './agendar-exame.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

describe('AgendarExameComponent', () => {
  let component: AgendarExameComponent;
  let fixture: ComponentFixture<AgendarExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarExameComponent, NavigationBarComponent],
      providers: [AuthenticationService],
      imports: [
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
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
