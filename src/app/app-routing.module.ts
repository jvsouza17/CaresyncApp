import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Rota padrão redireciona para login
  // {
  //   path: '', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard],
  //   children: [
  //     { path: '', component: HomeComponent }
  //   ],
  // },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },  // Rota para o componente de login
  { path: 'cadastro', component: CadastroComponent },  // Rota para o componente de cadastro
  { path: '**', redirectTo: '/login' }  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})
export class AppRoutingModule { }
