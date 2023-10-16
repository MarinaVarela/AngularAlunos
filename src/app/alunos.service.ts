import { Injectable } from '@angular/core';
import { AlunosModel } from './alunos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private url = `${environment.apiUrl}/alunos`;

  alunosLista: AlunosModel[] = [];

  constructor(private http: HttpClient) { }

  // Método de buscar todos alunos
  getTodosAlunos(): Observable<AlunosModel[]> {
    return this.http.get<AlunosModel[]>(this.url);
  }

  // Método de buscar aluno por ID
  getAlunoId(id: number): Observable<AlunosModel> {
    return this.http.get<AlunosModel>(`${this.url}/${id}`);
  }

  // Método para cadastrar novo aluno
  novoAluno(novoAlunoRequest: AlunosModel): Observable<AlunosModel> {
    novoAlunoRequest.id = 0;
    return this.http.post<AlunosModel>(this.url, novoAlunoRequest);
  }
  // Método para editar o cadastro de aluno
  atualizarAluno(id: number, alunoAtualizado: AlunosModel): Observable<AlunosModel> {
    return this.http.put<AlunosModel>(`${this.url}/${id}`, alunoAtualizado);
  }

  // Método para deletar aluno
  deletarAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}