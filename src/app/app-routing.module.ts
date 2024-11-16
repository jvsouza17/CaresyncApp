import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { AgendarConsultaComponent } from './componentes/agendar-consulta/agendar-consulta.component';
import { ExameDetalheComponent } from './componentes/exames-detalhe/exames-detalhe.component';
import { CartaoVacinasComponent } from './componentes/cartao-vacinas/cartao-vacinas.component';
import { VacinasDetalheComponent } from './componentes/vacinas-detalhe/vacinas-detalhe.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ConsultasDetalheComponent } from './componentes/consultas-detalhe/consultas-detalhe.component';
import { AgendarExameComponent } from './componentes/agendar-exame/agendar-exame.component';
import { MinhasConsultasComponent } from './componentes/minhas-consultas/minhas-consultas.component';
import { MeusExamesComponent } from './componentes/meus-exames/meus-exames.component';
import { ExamesComponent } from './componentes/exames/exames.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full',
    children: [{ path: '', component: HomeComponent }],
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de login

  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de cadastro
  { path: 'home', component: HomeComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'consultas', component: ConsultasComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'exames', component: ExamesComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'meus-exames', component: MeusExamesComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'agendar-consulta', component: AgendarConsultaComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'agendar-exame', component: AgendarExameComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'minhas-consultas', component: MinhasConsultasComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'exames-detalhes', component: ExameDetalheComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'cartao-vacinas', component: CartaoVacinasComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'vacinas-detalhes', component: VacinasDetalheComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'consultas-detalhes', component: ConsultasDetalheComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: 'consultas-detalhes/:id', component: ConsultasDetalheComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  { path: '**', redirectTo: '/login'},  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
