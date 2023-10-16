import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunosModel } from '../alunos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  inputFiltro: string = '';

  alunosFiltrados: AlunosModel[] = [];
  alunosLista: AlunosModel[] = [];
  alunosLista$: Observable<AlunosModel[]> = new Observable<AlunosModel[]>();  // Geralmente é mais apropriado inicializar sua propriedade alunosLista$ como um Observable vazio no construtor. Isso torna seu código mais seguro e evita que você precise verificar se a propriedade é undefined toda vez que a usa.

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosLista$ = this.alunosService.getTodosAlunos();
    this.alunosLista$.subscribe((alunosLista: AlunosModel[]) => {
      this.alunosLista = alunosLista;
      this.alunosFiltrados = alunosLista;
    });
  }

  getTodosAlunos(): void {
    this.inputFiltro = '';
    this.alunosService.getTodosAlunos()
    .subscribe({
      next: (response) => {
        this.alunosFiltrados = response;
      }
    })
  }

  filtrarResultado(text: string) {
    this.alunosFiltrados = this.alunosLista.filter(
      aluno =>
        aluno?.nome.toLowerCase().includes(text.toLowerCase()) ||
        aluno?.idade == +text ||
        aluno?.curso.toLowerCase().includes(text.toLowerCase())
    );
  }
}
