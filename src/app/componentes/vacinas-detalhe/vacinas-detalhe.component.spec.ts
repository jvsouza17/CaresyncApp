import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasDetalheComponent } from './vacinas-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DataTablesModule } from 'angular-datatables';

describe('VacinasDetalheComponent', () => {
  let component: VacinasDetalheComponent;
  let fixture: ComponentFixture<VacinasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacinasDetalheComponent, NavigationBarComponent],
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

    fixture = TestBed.createComponent(VacinasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
