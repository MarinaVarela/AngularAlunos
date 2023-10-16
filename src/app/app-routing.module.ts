import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { HomeComponent } from './home/home.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';

const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' },
  { path: 'alunos', component: HomeComponent },
  { path: 'alunos/novo', component: NovoAlunoComponent },
  { path: 'alunos/editar/:id', component: EditarAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
