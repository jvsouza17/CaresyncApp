import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { ExamesComponent } from './componentes/exames/exames.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [UsuarioAutenticadoGuard],
    children: [{ path: '', component: HomeComponent }],
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de login
  { path: 'cadastro', component: CadastroComponent },  // Rota para o componente de cadastro
  // { path: 'home', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard]},
  // { path: 'consultas', component: ConsultasComponent, canActivate: [UsuarioAutenticadoGuard]},
  // { path: 'exames', component: ExamesComponent, canActivate: [UsuarioAutenticadoGuard]},
  
  // Descomentar para entrar sem logar
  
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent }, 
  { path: 'exames', component: ExamesComponent },
  { path: '**', redirectTo: '/login'},  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
