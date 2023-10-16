import { Component, OnInit } from '@angular/core';
import { AlunosModel } from '../alunos';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  alunoInfo: AlunosModel = { id: 0, nome: "", idade: 0, curso: "" };

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; 
  
    if (!isNaN(id)) { 
      this.alunosService.getAlunoId(id)
        .subscribe({
          next: (response) => {
            this.alunoInfo = response;
          }
        });
    }
  } 

  atualizarAluno() {
    this.alunosService.atualizarAluno(this.alunoInfo.id, this.alunoInfo)
    .subscribe({
      next: (response) => {
        window.alert("Aluno atualizado com sucesso!");
        this.router.navigate(["alunos"]);
      }
    });
  }

  deletarAluno(id: number) {
    this.alunosService.deletarAluno(id)
    .subscribe({
      next: (response) => {
        window.alert("Aluno deletado com sucesso!");
        this.router.navigate(["alunos"]);
      }
    });
  }

}
