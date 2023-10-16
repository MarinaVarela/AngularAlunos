import { Component, Input } from '@angular/core';
import { AlunosModel } from '../alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  @Input() aluno: AlunosModel | undefined;
}
