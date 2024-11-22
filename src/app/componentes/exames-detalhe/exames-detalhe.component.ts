import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrescricaoDialogComponent } from '../prescricao-dialog/prescricao-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ExameService } from '../../services/exames/exame.service';
import { AgendamentoExames } from '../../DTOs/exames/agendamentoExames';

@Component({
  selector: 'app-exame-detalhe',
  templateUrl: './exames-detalhe.component.html',
  styleUrls: ['./exames-detalhe.component.css']
})
export class ExameDetalheComponent {
  user: AgendamentoExames = {};
  idExame = this.route.snapshot.paramMap.get('id')

  constructor(private route: ActivatedRoute, private exameService: ExameService, public dialog: MatDialog) {}

  ngOnInit(){
    this.carregarDetalhesExame();
  }

  carregarDetalhesExame() {
    this.exameService.getExameDetalhes(this.idExame!).subscribe((response) => {
      console.log(response);
      this.user.nomePaciente = response.nomePaciente
      this.user.dataNascimento = response.dataNascimento
      this.user.nomeMedico = response.nomeMedico
      this.user.nomeExame = response.nomeExame
      this.user.data = response.data
      this.user.hora = response.hora
      this.user.local = response.local
      this.user.endereco = response.endereco
      this.user.observacoes = response.observacoes
    })
  }

  abrirModal(): void {
    this.dialog.open(PrescricaoDialogComponent, {
      width: '400px'
    });
  }

}
