import { MatInputModule } from '@angular/material/input';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthContainerComponent } from '../auth-container/auth-container.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroComponent, AuthContainerComponent],
      providers: [AuthenticationService],
      imports: [
        NoopAnimationsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule
        // Inclua os módulos necessários que o NavigationBarComponent utiliza,
        // por exemplo: RouterModule, HttpClientModule etc.
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#passwordMatchValidator retorna erro', () => {
    const formGroup = new FormGroup({
      senha: new FormControl('teste123'),
      confirmSenha: new FormControl('teste456')
    });

    const retorno = component.passwordMatchValidator(formGroup);
    expect(retorno).toEqual({passwordMismatch: true});
  });

  it('#passwordMatchValidator não retorna erro', () => {
    const formGroup = new FormGroup({
      senha: new FormControl('teste123'),
      confirmSenha: new FormControl('teste123')
    });

    const retorno = component.passwordMatchValidator(formGroup);
    expect(retorno).toBeNull();
  });

  it('#formularioValido é acionado', ()=>{
    const formGroup = new FormGroup({
      nome: new FormControl('João'),
      sobrenome: new FormControl('Álvares'),
      sexo: new FormControl('Masculino'),
      numeroSUS: new FormControl('123456789123456'),
      dataNascimento: new FormControl('19/10/2000'),
      CPF: new FormControl('12345678901'),
      endereco: new FormControl('QR 101 CONJUNTO 10'),
      CEP: new FormControl('75300205'),
      cidade: new FormControl('Brasília'),
      UF: new FormControl('DF'),
      email: new FormControl('joao@example.com'),
      telefone: new FormControl('61996754831'),
      senha: new FormControl('123456'),
      confirmSenha: new FormControl('123456'),
    })

    component.formulario = formGroup
    component.formularioValido();
    expect(component.formulario.valid).toBeTruthy();
  });

  it('#formatCpf formata um CPF válido', () => {
    const formGroup = new FormGroup({
      CPF: new FormControl('12345678901'),
    });
    component.formulario = formGroup;
    component.formatCpf();
    expect(component.formulario.get('CPF')?.value).toBe('123.456.789-01');
  });

  it('#formatCpf não formata um CPF inválido', () => {
    const formGroup = new FormGroup({
      CPF: new FormControl('1234567890'),
    });
    component.formulario = formGroup;
    component.formatCpf();
    expect(component.formulario.get('CPF')?.value).toBe('1234567890');
  });

  it('#formatTelefone formata um número válido', () => {
    const formGroup = new FormGroup({
      telefone: new FormControl('61996754831'),
    });
    component.formulario = formGroup;
    component.formatTelefone();
    expect(component.formulario.get('telefone')?.value).toBe('(61) 99675-4831');
  });

  it('#formatTelefone não formata um número inválido', () => {
    const formGroup = new FormGroup({
      telefone: new FormControl('6199675483'),
    });
    component.formulario = formGroup;
    component.formatTelefone();
    expect(component.formulario.get('telefone')?.value).toBe('6199675483');
  });
});
