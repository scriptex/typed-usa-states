export type IUSAZipCode = string;

export type IUSAZipCodeRange = [IUSAZipCode, IUSAZipCode];

export interface IUSAStateArea {
	year: number;
	value: number; // in square miles
}

export interface IUSAStatePopulation {
	year: number;
	count: number;
}

export interface IUSAState {
	name: string;
	abbreviation: string;
	territory: boolean;
	capital: string;
	contiguous: boolean;
	zipCodes?: IUSAZipCodeRange[];
	area?: IUSAStateArea;
	population?: IUSAStatePopulation;
	counties?: string[];
}

export interface IUSACity {
	name: string;
	state: string;
}
