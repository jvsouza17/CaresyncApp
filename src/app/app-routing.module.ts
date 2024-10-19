import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Rota padrão redireciona para login
  { path: 'login', component: LoginComponent },  // Rota para o componente de login
  { path: 'cadastro', component: CadastroComponent },  // Rota para o componente de cadastro
  { path: '**', redirectTo: '/login' }  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class AppRoutingModule { }
