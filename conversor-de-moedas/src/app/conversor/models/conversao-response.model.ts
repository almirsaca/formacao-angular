export class Error {
	public code: number;
	public type: string;
	public info: string;
}

export class ConversaoResponse {

	public success: boolean;
	public base: string;
	public date: string;
	public rates: any;
	public error: Error;
}

// Exemplo de resposta
//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}
