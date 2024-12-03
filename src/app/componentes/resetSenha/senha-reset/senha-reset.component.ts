import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senha-reset',
  templateUrl: './senha-reset.component.html',
  styleUrl: '../email-reset/email-reset.component.css'
})
export class SenhaResetComponent {
  senhaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.senhaForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      codigo: ['', [Validators.required]],
      novaSenha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const novaSenha = control.get('novaSenha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;
    return novaSenha === confirmarSenha ? null : { passwordMismatch: true };
  }

  onSubmitSenha() {
    if (this.senhaForm.valid) {
      const formValues = this.senhaForm.value;
      const req = {
        email: formValues.email,
        codigo: formValues.codigo,
        senha: formValues.novaSenha
      };
      this.userService.resetPassword(req).subscribe(() => {
        console.log('Senha redefinida com sucesso');
        this.router.navigate(['/login']);
      });
    }
  }
}
