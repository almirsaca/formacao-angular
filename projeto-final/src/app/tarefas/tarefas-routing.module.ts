import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
    /// Atalho para o listar tarefas
    /// http://localhost:4200/tarefas
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
    /// Para remderização do componente listar 
    /// tarefas na tag <router-outlet> </router-outlet>
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent 
	},
	/// Roteamento para a tela de cadastro de tarefas
	{
		path: 'tarefas/cadastrar',
		component: CadastrarTarefaComponent
	},
	/// Roteamento para a tela de edição de tarefas
	{
		path: 'tarefas/editar/:id',
		component: EditarTarefaComponent
	}
];
