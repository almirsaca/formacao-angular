import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

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
	}
];
