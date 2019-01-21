// https://github.com/jakevdp/data-USstates/blob/master/state-areas.csv
// https://github.com/jakevdp/data-USstates/blob/master/state-population.csv

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
    zipRanges: number[][];
    area: number;
    population: IUSAStatePopulation;
}

export const usaStates: IUSAState[] = [
	{
		name: 'Alabama',
		abbreviation: 'AL',
		territory: false,
		capital: 'Montgomery',
		contiguous: true,
        zipRanges: [[35801, 35816]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Alaska',
		abbreviation: 'AK',
		territory: false,
		capital: 'Juneau',
		contiguous: false,
        zipRanges: [[99501, 99524]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'American Samoa',
		abbreviation: 'AS',
		territory: true,
		capital: 'Pago Pago',
		contiguous: false,
        zipRanges: [[96799, 96799]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Arizona',
		abbreviation: 'AZ',
		territory: false,
		capital: 'Phoenix',
		contiguous: true,
        zipRanges: [[85001, 85055]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Arkansas',
		abbreviation: 'AR',
		territory: false,
		capital: 'Little Rock',
		contiguous: true,
        zipRanges: [[72201, 72217]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'California',
		abbreviation: 'CA',
		territory: false,
		capital: 'Sacramento',
		contiguous: true,
        zipRanges: [[94203, 94209], [90001, 90089], [90209, 90213]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Colorado',
		abbreviation: 'CO',
		territory: false,
		capital: 'Denver',
		contiguous: true,
        zipRanges: [[80201, 80239]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Connecticut',
		abbreviation: 'CT',
		territory: false,
		capital: 'Hartford',
		contiguous: true,
        zipRanges: [[06101, 06112]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Delaware',
		abbreviation: 'DE',
		territory: false,
		capital: 'Dover',
		contiguous: true,
        zipRanges: [[19901, 19905]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'District Of Columbia',
		abbreviation: 'DC',
		territory: false,
		capital: '',
		contiguous: true,
        zipRanges: [[20001, 20020]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Federated States Of Micronesia',
		abbreviation: 'FM',
		territory: true,
		capital: 'Palikir',
		contiguous: false,
        zipRanges: [[96941, 96944]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Florida',
		abbreviation: 'FL',
		territory: false,
		capital: 'Tallahassee',
		contiguous: true,
        zipRanges: [[32501, 32509], [33124, 33190], [32801, 32837]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Georgia',
		abbreviation: 'GA',
		territory: false,
		capital: 'Atlanta',
		contiguous: true,
        zipRanges: [[30301, 30381]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Guam',
		abbreviation: 'GU',
		territory: true,
		capital: 'Hagåtña',
		contiguous: false,
        zipRanges: [[96910, 96932]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Hawaii',
		abbreviation: 'HI',
		territory: false,
		capital: 'Honolulu',
		contiguous: false,
        zipRanges: [[96801, 96830]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Idaho',
		abbreviation: 'ID',
		territory: false,
		capital: 'Boise',
		contiguous: true,
        zipRanges: [[83254, 83254]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Illinois',
		abbreviation: 'IL',
		territory: false,
		capital: 'Springfield',
		contiguous: true,
        zipRanges: [[60601, 60641], [62701, 62709]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Indiana',
		abbreviation: 'IN',
		territory: false,
		capital: 'Indianapolis',
		contiguous: true,
        zipRanges: [[46201, 46209]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Iowa',
		abbreviation: 'IA',
		territory: false,
		capital: 'Des Moines',
		contiguous: true,
        zipRanges: [[52801, 52809], [50301, 50323]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Kansas',
		abbreviation: 'KS',
		territory: false,
		capital: 'Topeka',
		contiguous: true,
        zipRanges: [[67201, 67221]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Kentucky',
		abbreviation: 'KY',
		territory: false,
		capital: 'Frankfort',
		contiguous: true,
        zipRanges: [[41701, 41702]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Louisiana',
		abbreviation: 'LA',
		territory: false,
		capital: 'Baton Rouge',
		contiguous: true,
        zipRanges: [[70112, 70119]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Maine',
		abbreviation: 'ME',
		territory: false,
		capital: 'Augusta',
		contiguous: true,
        zipRanges: [[04032, 04034]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Marshall Islands',
		abbreviation: 'MH',
		territory: true,
		capital: 'Majuro',
		contiguous: false,
        zipRanges: [[96960, 96960], [96970, 96970]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Maryland',
		abbreviation: 'MD',
		territory: false,
		capital: 'Annapolis',
		contiguous: true,
        zipRanges: [[21201, 21237]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Massachusetts',
		abbreviation: 'MA',
		territory: false,
		capital: 'Boston',
		contiguous: true,
        zipRanges: [[02101, 02137]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Michigan',
		abbreviation: 'MI',
		territory: false,
		capital: 'Lansing',
		contiguous: true,
        zipRanges: [[49036, 49036], [49734, 49735]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Minnesota',
		abbreviation: 'MN',
		territory: false,
		capital: 'Saint Paul',
		contiguous: true,
        zipRanges: [[55801, 55808]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Mississippi',
		abbreviation: 'MS',
		territory: false,
		capital: 'Jackson',
		contiguous: true,
        zipRanges: [[39530, 39535]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Missouri',
		abbreviation: 'MO',
		territory: false,
		capital: 'Jefferson City',
		contiguous: true,
        zipRanges: [[63101, 63141]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Montana',
		abbreviation: 'MT',
		territory: false,
		capital: 'Helena',
		contiguous: true,
        zipRanges: [[59044, 59044]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Nebraska',
		abbreviation: 'NE',
		territory: false,
		capital: 'Lincoln',
		contiguous: true,
        zipRanges: [[68901, 68902]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Nevada',
		abbreviation: 'NV',
		territory: false,
		capital: 'Carson City',
		contiguous: true,
        zipRanges: [[89501, 89513]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'New Hampshire',
		abbreviation: 'NH',
		territory: false,
		capital: 'Concord',
		contiguous: true,
        zipRanges: [[03217, 03217]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'New Jersey',
		abbreviation: 'NJ',
		territory: false,
		capital: 'Trenton',
		contiguous: true,
        zipRanges: [[07039, 07039]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'New Mexico',
		abbreviation: 'NM',
		territory: false,
		capital: 'Santa Fe',
		contiguous: true,
        zipRanges: [[87500, 87506]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'New York',
		abbreviation: 'NY',
		territory: false,
		capital: 'Albany',
		contiguous: true,
        zipRanges: [[10001, 10048]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'North Carolina',
		abbreviation: 'NC',
		territory: false,
		capital: 'Raleigh',
		contiguous: true,
        zipRanges: [[27565, 27565]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'North Dakota',
		abbreviation: 'ND',
		territory: false,
		capital: 'Bismarck',
		contiguous: true,
        zipRanges: [[58282, 58282]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Northern Mariana Islands',
		abbreviation: 'MP',
		territory: true,
		capital: 'Saipan',
		contiguous: false,
        zipRanges: [[96950, 96950]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Ohio',
		abbreviation: 'OH',
		territory: false,
		capital: 'Columbus',
		contiguous: true,
        zipRanges: [[44101, 44179]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Oklahoma',
		abbreviation: 'OK',
		territory: false,
		capital: 'Oklahoma City',
		contiguous: true,
        zipRanges: [[74101, 74110]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Oregon',
		abbreviation: 'OR',
		territory: false,
		capital: 'Salem',
		contiguous: true,
        zipRanges: [[97201, 97225]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Palau',
		abbreviation: 'PW',
		territory: true,
		capital: 'Ngerulmud',
		contiguous: false,
        zipRanges: [[96939, 96940]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Pennsylvania',
		abbreviation: 'PA',
		territory: false,
		capital: 'Harrisburg',
		contiguous: true,
        zipRanges: [[15201, 15244]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Puerto Rico',
		abbreviation: 'PR',
		territory: true,
		capital: 'San Juan',
		contiguous: false,
        zipRanges: [[00600, 00799], [00900, 00999]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Rhode Island',
		abbreviation: 'RI',
		territory: false,
		capital: 'Providence',
		contiguous: true,
        zipRanges: [[02840, 02841]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'South Carolina',
		abbreviation: 'SC',
		territory: false,
		capital: 'Columbia',
		contiguous: true,
        zipRanges: [[29020, 29020]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'South Dakota',
		abbreviation: 'SD',
		territory: false,
		capital: 'Pierre',
		contiguous: true,
        zipRanges: [[57401, 57402]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Tennessee',
		abbreviation: 'TN',
		territory: false,
		capital: 'Nashville',
		contiguous: true,
        zipRanges: [[37201, 37222]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Texas',
		abbreviation: 'TX',
		territory: false,
		capital: 'Austin',
		contiguous: true,
        zipRanges: [[78701, 78705]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Utah',
		abbreviation: 'UT',
		territory: false,
		capital: 'Salt Lake City',
		contiguous: true,
        zipRanges: [[84321, 84323]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Vermont',
		abbreviation: 'VT',
		territory: false,
		capital: 'Montpelier',
		contiguous: true,
        zipRanges: [[05751, 05751]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Virgin Islands',
		abbreviation: 'VI',
		territory: true,
		capital: 'Charlotte Amalie',
		contiguous: false,
        zipRanges: [[00801, 00804]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Virginia',
		abbreviation: 'VA',
		territory: false,
		capital: 'Richmond',
		contiguous: true,
        zipRanges: [[24517, 24517]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Washington',
		abbreviation: 'WA',
		territory: false,
		capital: 'Olympia',
		contiguous: true,
        zipRanges: [[98004, 98009]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'West Virginia',
		abbreviation: 'WV',
		territory: false,
		capital: 'Charleston',
		contiguous: true,
        zipRanges: [[25813, 25813]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Wisconsin',
		abbreviation: 'WI',
		territory: false,
		capital: 'Madison',
		contiguous: true,
        zipRanges: [[53201, 53228]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	},
	{
		name: 'Wyoming',
		abbreviation: 'WY',
		territory: false,
		capital: 'Cheyenne',
		contiguous: true,
        zipRanges: [[82941, 82941]],
        area: 0,
        population: {
            year: 2018,
            count: 0
        }
	}
];
