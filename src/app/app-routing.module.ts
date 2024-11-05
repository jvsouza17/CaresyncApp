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

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full',
    children: [{ path: '', component: HomeComponent }],
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de login

  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard]},  // Rota para o componente de cadastro
  { path: 'home', component: HomeComponent},
  { path: 'consultas', component: ConsultasComponent},
  { path: 'exames', component: ExamesComponent},
  { path: 'agendar-consulta', component: AgendarConsultaComponent},
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent},
  { path: 'exames-detalhes', component: ExameDetalheComponent},
  { path: 'cartao-vacinas', component: CartaoVacinasComponent},
  { path: '**', redirectTo: '/login'},  // Rota coringa redireciona para login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
