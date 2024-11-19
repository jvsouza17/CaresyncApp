import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusExamesComponent } from './meus-exames.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DataTablesModule } from 'angular-datatables';

describe('MeusExamesComponent', () => {
  let component: MeusExamesComponent;
  let fixture: ComponentFixture<MeusExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeusExamesComponent, NavigationBarComponent],
      providers: [AuthenticationService],
      imports: [
        DataTablesModule,
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
