import { Component, OnInit, ViewChild } from '@angular/core';
// UItilizado para realizar o roteamento para a tela de listagem após criar uma tarefa
import { Router } from '@angular/router';
// Utilizado no form de validação
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  // 'formTarefa' é a referência que deve ser utilizada no html
  //  <form #formTarefa="ngForm">
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {
  	this.tarefa = new Tarefa(0, "", false);
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.tarefaService.cadastrar(this.tarefa);
      // Após o cadastro, redirecionamos para a listagem de tarefas
  	  this.router.navigate(["/tarefas"]);
    }
  }

}
