import { 
	Component, Input, Output, EventEmitter, OnInit 
} from '@angular/core';

import { ConversaoResponse, Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
	selector: 'modal-cotacao',
	templateUrl: './modal-cotacao.component.html'
})
export class ModalCotacaoComponent implements OnInit {

	mensagemErro: string;
	@Input() idModalCotacao: string;
	@Input() conversaoResponse: ConversaoResponse;
	@Input() conversao: Conversao = new Conversao();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private conversorService: ConversorService) {}

  ngOnInit() { }

	novaConsulta() {
		this.onConfirm.emit();
	}

	get possuiErro(): boolean {
		this.mensagemErro = "";
		let erro = false;
		if(this.conversaoResponse != undefined && (this.conversaoResponse.success === undefined ||
			!this.conversaoResponse.success))
			{
				erro = true;
				this.mensagemErro = this.conversaoResponse.error.info; 
			}
		return erro;
	}

	get valorConvertido(): string {
	  	if (this.conversaoResponse === undefined ||
			this.conversaoResponse.rates === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.conversao.valor * 
	  		this.conversaoResponse.rates[this.conversao.moedaPara])
	  			.toFixed(2);
	}

	get cotacaoPara(): number {
	  	return this.conversorService.cotacaoPara(
	  		this.conversaoResponse, this.conversao);
	}

	get cotacaoDe(): string {
	  	return this.conversorService.cotacaoDe(
	  		this.conversaoResponse, this.conversao);
	}

	get dataCotacao(): string {
		return this.conversorService.dataCotacao(
	  		this.conversaoResponse);
	}
}
