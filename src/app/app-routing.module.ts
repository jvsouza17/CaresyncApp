import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { ExamesComponent } from './componentes/exames/exames.component';
import { AgendarConsultaComponent } from './componentes/agendar-consulta/agendar-consulta.component';
import { MeusAgendamentosComponent } from './componentes/meus-agendamentos/meus-agendamentos.component';
import { ExameDetalheComponent } from './componentes/exames-detalhe/exames-detalhe.component';
import { CartaoVacinasComponent } from './componentes/cartao-vacinas/cartao-vacinas.component';
import { VacinasDetalheComponent } from './componentes/vacinas-detalhe/vacinas-detalhe.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ConsultasDetalheComponent } from './componentes/consultas-detalhe/consultas-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [UsuarioAutenticadoGuard],
    children: [{ path: '', component: HomeComponent }],
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de login

  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de cadastro
  { path: 'home', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard]},		 
  { path: 'consultas', component: ConsultasComponent, canActivate: [UsuarioAutenticadoGuard]},		  
  { path: 'exames', component: ExamesComponent, canActivate: [UsuarioAutenticadoGuard]},		  
  { path: 'agendar-consulta', component: AgendarConsultaComponent, canActivate: [UsuarioAutenticadoGuard]},		 
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent, canActivate: [UsuarioAutenticadoGuard]},	 
  { path: 'exames-detalhes', component: ExameDetalheComponent, canActivate: [UsuarioAutenticadoGuard]},	  
  { path: 'cartao-vacinas', component: CartaoVacinasComponent, canActivate: [UsuarioAutenticadoGuard]},	  
  { path: 'vacinas-detalhes', component: VacinasDetalheComponent, canActivate: [UsuarioAutenticadoGuard]},  
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'consultas-detalhes', component: ConsultasDetalheComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: '**', redirectTo: '/login'},  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
