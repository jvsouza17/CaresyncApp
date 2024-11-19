import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesComponent } from './exames.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

describe('ExamesComponent', () => {
  let component: ExamesComponent;
  let fixture: ComponentFixture<ExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamesComponent, NavigationBarComponent],
      providers: [AuthenticationService],
      imports: [
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
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
