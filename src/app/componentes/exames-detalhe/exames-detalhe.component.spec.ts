import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExameDetalheComponent } from './exames-detalhe.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ExameDetalheComponent', () => {
  let component: ExameDetalheComponent;
  let fixture: ComponentFixture<ExameDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExameDetalheComponent, NavigationBarComponent, ],  // Inclua o NavigationBarComponent
      providers: [AuthenticationService],
      imports: [
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExameDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
