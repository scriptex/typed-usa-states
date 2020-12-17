#!/usr/bin/env ts-node-script

import { resolve } from 'path';
import { writeFileSync } from 'fs';

import { IUSAState } from '../src/typings';
import { usaStatesFull } from '../src/states-full';

type File = {
	name: string;
	value: IUSAState[];
	export: string;
};

const usaStates = usaStatesFull.map(({ name, abbreviation, territory, capital, contiguous }: IUSAState) => ({
	name,
	abbreviation,
	territory,
	capital,
	contiguous
}));

const usaStatesWithZipCodes = usaStatesFull.map(
	({ name, abbreviation, territory, capital, contiguous, zipCodes }: IUSAState) => ({
		name,
		abbreviation,
		territory,
		capital,
		contiguous,
		zipCodes
	})
);

const usaStatesWithArea = usaStatesFull.map(
	({ name, abbreviation, territory, capital, contiguous, area }: IUSAState) => ({
		name,
		abbreviation,
		territory,
		capital,
		contiguous,
		area
	})
);

const usaStatesWithPopulation = usaStatesFull.map(
	({ name, abbreviation, territory, capital, contiguous, population }: IUSAState) => ({
		name,
		abbreviation,
		territory,
		capital,
		contiguous,
		population
	})
);

const usaStatesWithCounties = usaStatesFull.map(
	({ name, abbreviation, territory, capital, contiguous, counties }: IUSAState) => ({
		name,
		abbreviation,
		territory,
		capital,
		contiguous,
		counties
	})
);

const files: File[] = [
	{
		name: 'states',
		value: usaStates,
		export: 'usaStates'
	},
	{
		name: 'states-with-zipcodes',
		value: usaStatesWithZipCodes,
		export: 'usaStatesWithZipCodes'
	},
	{
		name: 'states-with-area',
		value: usaStatesWithArea,
		export: 'usaStatesWithArea'
	},
	{
		name: 'states-with-population',
		value: usaStatesWithPopulation,
		export: 'usaStatesWithPopulation'
	},
	{
		name: 'states-with-counties',
		value: usaStatesWithCounties,
		export: 'usaStatesWithCounties'
	}
];

files.forEach((file: File) => {
	writeFileSync(
		resolve(__dirname, '..', 'src', `${file.name}.ts`),
		`
import { IUSAState } from './typings';

export const ${file.export}: IUSAState[] = ${JSON.stringify(file.value, null, 2)}
`
	);
});

process.exit();
