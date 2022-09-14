import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas'; 

// Lista das rotas da aplicação
export const routes: Routes = [
  /// Renderização da página inicial
  /// será listar tarefas
  /// Temos 3 url´s de acesso para 
  /// o listar tarefa
  /// 1 - Raiz da aplicação (http://localhost:4200)
  /// 2 - Path : http://localhost:4200/tarefas
  /// 3 - Path : http://localhost:4200/tarefas/listar
  { 
    path: '', 
    redirectTo: '/tarefas/listar', 
    pathMatch: 'full' 
  },
  /// Herda todas as rotas do mudolo Tarefas
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
