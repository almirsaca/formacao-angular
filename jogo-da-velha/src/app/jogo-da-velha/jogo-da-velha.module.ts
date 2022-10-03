import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  // Faremos o export aqui, pois
  // não vamos utilizar rotas
  // para visualizar o html do component
  exports: [
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
