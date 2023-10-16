import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { AlunosModel } from '../alunos';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent {
  novoAlunoRequest: AlunosModel = { id: 0, nome: "", idade: 0, curso: "" };

  constructor( private alunosService: AlunosService, private router: Router ) { }

  novoAluno() {
    if (this.novoAlunoRequest.nome !== '' && this.novoAlunoRequest.idade > 0) {
      this.alunosService.getTodosAlunos().
        subscribe((alunos) => {
          const novoAlunoId = alunos && alunos.length > 0 ? Math.max(...alunos.map((aluno) => aluno.id)) + 1 : 1;

          this.novoAlunoRequest.id = novoAlunoId;

          this.alunosService.novoAluno(this.novoAlunoRequest).
            subscribe({
              next: (aluno) => {
                window.alert("Aluno cadastrado com sucesso!");
                this.router.navigate(["alunos"]);
              },
              error: (error) => {
                console.error("Erro ao cadastrar aluno:", error);
              }
            });
        });
    }
  }

  
  
}




// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { AlunosService } from '../alunos.service';
// import { AlunosModel } from '../alunos';

// @Component({
//   selector: 'app-novo-aluno',
//   templateUrl: './novo-aluno.component.html',
//   styleUrls: ['./novo-aluno.component.css']
// })
// export class NovoAlunoComponent implements OnInit {

//   novoAlunoRequest: AlunosModel = { id: 0, nome: "", idade: 0, curso: "" }

//   constructor(private alunosService: AlunosService, private router: Router) { }

//   ngOnInit(): void { }

//   novoAluno() {
//     this.alunosService.getTodosAlunos().subscribe((alunos) => {
//       const novoAlunoId = alunos && alunos.length > 0 ? Math.max(...alunos.map(aluno => aluno.id)) + 1 : 1;

//       this.novoAlunoRequest.id = novoAlunoId;

//       this.alunosService.novoAluno(this.novoAlunoRequest).
//         subscribe({
//           next: (aluno) => {
//             this.router.navigate(["alunos"]);
//           }
//         });
//     });
//   }

// }





// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { AlunosService } from '../alunos.service';
// import { AlunosModel } from '../alunos';

// @Component({
//   selector: 'app-novo-aluno',
//   templateUrl: './novo-aluno.component.html',
//   styleUrls: ['./novo-aluno.component.css']
// })
// export class NovoAlunoComponent implements OnInit {
//   form: FormGroup;

//   novoAlunoRequest: AlunosModel = {
//     id: 0, 
//     nome: "",
//     idade: 0,
//     curso: "",
//   }

//   constructor(private alunosService: AlunosService, private router: Router, private formBuilder: FormBuilder) {
//     this.form = this.formBuilder.group({
//       nome: ['', Validators.required],
//       idade: ['', [Validators.required, Validators.min(0)]],
//       curso: ['', Validators.required],
//     })
//    }

//   ngOnInit(): void { }

//   novoAluno() {
//     this.alunosService.getTodosAlunos().subscribe((alunos) => {
//       if (alunos && alunos.length > 0) {
//         const maiorId = Math.max(...alunos.map(aluno => aluno.id));
//         this.novoAlunoRequest.id = maiorId + 1;
//         this.alunosService.novoAluno(this.novoAlunoRequest).
//           subscribe({
//             next: (aluno) => {
//               this.router.navigate(["alunos"]);
//             }
//           });
//       } else {    // Se não houver, define o id como 1

//         this.novoAlunoRequest.id = 1;
//         this.alunosService.novoAluno(this.novoAlunoRequest).
//           subscribe({
//             next: (aluno) => {
//               this.router.navigate(["alunos"]);
//             }
//           });
//       }
//     });
//   }
// }