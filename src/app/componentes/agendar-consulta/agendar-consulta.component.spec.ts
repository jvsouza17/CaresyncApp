import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarConsultaComponent } from './agendar-consulta.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import { ConsultaService } from '../../services/consulta/consulta.service';

describe('AgendarConsultaComponent', () => {
  let component: AgendarConsultaComponent;
  let fixture: ComponentFixture<AgendarConsultaComponent>;
  let consultaServiceSpy: jasmine.SpyObj<ConsultaService>

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ConsultaService', ['agendarConsulta']);

    await TestBed.configureTestingModule({
      declarations: [AgendarConsultaComponent, NavigationBarComponent],
      providers: [AuthenticationService, ConsultaService, {provide: ConsultaService, useValue: spy}],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    consultaServiceSpy = TestBed.inject(ConsultaService) as jasmine.SpyObj<ConsultaService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with valid data', () => {
    component.criarForms();

    component.formulario.patchValue({
      nomePaciente: 'John Doe',
      numeroSUS: '12345678901',
      sexo: 'Masculino',
      dataNascimento: '1990-01-01',
      especialidade: 'Cardiologia',
      localidade: 'São Paulo',
      dataConsulta: '2022-01-01',
      horario: '10:00',
      tipo: 'Consulta',
      endereco: 'Rua XYZ, 123',
      observacoes: 'Nenhuma observação'
    });

    expect(component.formulario.valid).toBeTruthy();
  });

  // it('should call agendarConsulta API with valid data', () => {
  //   consultaServiceSpy.agendarConsulta.and.callThrough();

  //   component.criarForms();

  //   component.formulario.patchValue({
  //     nomePaciente: 'John Doe',
  //     numeroSUS: '12345678901',
  //     sexo: 'Masculino',
  //     dataNascimento: '1990-01-01',
  //     especialidade: 'Cardiologia',
  //     localidade: 'São Paulo',
  //     dataConsulta: '2022-01-01',
  //     horario: '10:00',
  //     tipo: 'Consulta',
  //     endereco: 'Rua XYZ, 123',
  //     observacoes: 'Nenhuma observação'
  //   });

  //   component.formularioValido();

  //   expect(consultaServiceSpy.agendarConsulta).toHaveBeenCalled();
  //   // Add more assertions to verify the behavior of the agendarConsulta API call
  // });

});
