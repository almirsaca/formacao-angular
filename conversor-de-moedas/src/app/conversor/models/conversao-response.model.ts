export class ConversaoResponseError {
	
	constructor(
		public code?: number,
		public type?: string,
		public info?: string
	) {}
}

export class ConversaoResponse {

	constructor(
		public success: boolean,
		public base: string,
		public date: string,
		public rates: any,
		public error: ConversaoResponseError) {}
}

// Exemplo de resposta
//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}
