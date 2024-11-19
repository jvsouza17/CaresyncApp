import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  MinhasConsultasComponent } from './minhas-consultas.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DataTablesModule } from 'angular-datatables';

describe('MinhasConsultasComponent', () => {
  let component: MinhasConsultasComponent;
  let fixture: ComponentFixture<MinhasConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasConsultasComponent, NavigationBarComponent],
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

    fixture = TestBed.createComponent(MinhasConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
