import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthContainerComponent } from './componentes/auth-container/auth-container.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CpfMaskPipe } from './pipes/cpf-mask.pipe';
import { TelefoneMaskPipe } from './pipes/telefone-mask.pipe';
import { HomeComponent } from './componentes/home/home.component';
import { NavigationBarComponent } from './componentes/navigation-bar/navigation-bar.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { AgendarConsultaComponent } from './componentes/agendar-consulta/agendar-consulta.component';
import { DateBRPipe } from './pipes/date/date-br.pipe';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { ExameDetalheComponent } from './componentes/exames-detalhe/exames-detalhe.component';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { PrescricaoDialogComponent } from './componentes/prescricao-dialog/prescricao-dialog.component';
import { CartaoVacinasComponent } from './componentes/cartao-vacinas/cartao-vacinas.component';
import { VacinasDetalheComponent } from './componentes/vacinas-detalhe/vacinas-detalhe.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ConsultasDetalheComponent } from './componentes/consultas-detalhe/consultas-detalhe.component';
import { AgendarExameComponent } from './componentes/agendar-exame/agendar-exame.component';
import { MinhasConsultasComponent } from './componentes/minhas-consultas/minhas-consultas.component';
import { MeusExamesComponent } from './componentes/meus-exames/meus-exames.component';
import { ExamesComponent } from './componentes/exames/exames.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmailResetComponent } from './componentes/resetSenha/email-reset/email-reset.component';
import { SenhaResetComponent } from './componentes/resetSenha/senha-reset/senha-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthContainerComponent,
    CadastroComponent,
    CpfMaskPipe,
    TelefoneMaskPipe,
    HomeComponent,
    NavigationBarComponent,
    ConsultasComponent,
    MeusExamesComponent,
    AgendarConsultaComponent,
    DateBRPipe,
    MinhasConsultasComponent,
    ExameDetalheComponent,
    PrescricaoDialogComponent,
    CartaoVacinasComponent,
    VacinasDetalheComponent,
    PerfilComponent,
    ConsultasDetalheComponent,
    AgendarExameComponent,
    ExamesComponent,
    EmailResetComponent,
    SenhaResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogTitle,
    MatDialogContent,
    MatMenuModule,
    CommonModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
