import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-reset',
  templateUrl: './email-reset.component.html',
  styleUrls: ['./email-reset.component.css']
})
export class EmailResetComponent {
  emailForm!: FormGroup;
  codeForm!: FormGroup;
  showCodeInput = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.codeForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }

  onSubmitEmail() {
    if (this.emailForm.valid) {
      let req = {
        email: this.emailForm.value.email
      }
      this.userService.verifyEmail(req).subscribe(() => {
        console.log('Email enviado:', this.emailForm.value.email);
        this.showCodeInput = true;
      });
    }
  }

  onSubmitCode() {
    if (this.codeForm.valid) {
      let req = {
        email: this.emailForm.value.email,
        codigo: this.codeForm.value.code
      }
      this.userService.verifyCode(req).subscribe((codigoValido) => {
        codigoValido ? this.router.navigate(['/reset-senha']) : console.log('Código inválido');
        console.log('Código verificado:', this.codeForm.value.code);
      });
    }
  }
}
