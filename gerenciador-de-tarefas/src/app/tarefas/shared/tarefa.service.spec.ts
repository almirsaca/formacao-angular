import { TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que a lista esteja vazia', (() => {
    service.removerTodos();
    const tarefas = service.listarTodos();
    expect(tarefas).toEqual(null);
  }));
  
});
