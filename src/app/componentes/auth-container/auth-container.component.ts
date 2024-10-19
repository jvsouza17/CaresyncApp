import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.css'
})
export class AuthContainerComponent {
  isHidden: boolean = true;

  visibilidadePassword() {
    this.isHidden = !this.isHidden;
  }

}
