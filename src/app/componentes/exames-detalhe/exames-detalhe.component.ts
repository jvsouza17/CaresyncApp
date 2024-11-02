import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrescricaoDialogComponent } from '../prescricao-dialog/prescricao-dialog.component';

@Component({
  selector: 'app-exame-detalhe',
  templateUrl: './exames-detalhe.component.html',
  styleUrls: ['./exames-detalhe.component.css']
})
export class ExameDetalheComponent {
  // Propriedades para interpolação
  especialidade: string = 'Pediatria';
  dataExame: string = '12/01/2025';
  local: string = 'UPA Núcleo Bandeirante';
  endereco: string = 'Avenida Conjunto N° 10';
  medico: string = 'Luiz Henrique André Rosa da Silva';
  motivoExame: string = 'Queixa de dores abdominais intensas, com suspeita de complicações intestinais.';
  nomePaciente: string = 'Nome do Paciente';
  dataNascimento: string = '01/01/1999';
  observacoes: string = `
    Paciente se queixou de dores abdominais. Foi feita a solicitação de uma tomografia na parte do abdômen.
    O exame de imagem revelou inflamação significativa na região do intestino delgado, compatível com um quadro de infecção intestinal aguda.
    Não foram observadas obstruções intestinais ou perfurações, mas há sinais de espessamento das paredes intestinais, comum em processos infecciosos.
    Não há evidência de abscessos ou outros sinais de complicações graves.
  `;
  reavaliacao: string = 'Agendar retorno após 7 dias para revisão dos sintomas e possível ajuste do tratamento, caso necessário.';

  constructor(public dialog: MatDialog) {}

  abrirModal(): void {
    this.dialog.open(PrescricaoDialogComponent, {
      width: '400px'
    });
  }

}
