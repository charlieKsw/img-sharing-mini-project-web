export interface iForm {
	id: number;
	name: string;
	type: string;
	options?: any[];
	rules?: iFormRules;
	editOptionType?: any;
}

export interface iFormRules {
	required: boolean;
	message: string;
}
