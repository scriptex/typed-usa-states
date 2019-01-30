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
    zipCodes: number[][]; // array of arrays of starting zipcode and ending zipcode
    area: number; // in square miles as of Jan 2019
    population: IUSAStatePopulation;
}

export const usaStates: IUSAState[] = [
	{
		name: 'Alabama',
		abbreviation: 'AL',
		territory: false,
		capital: 'Montgomery',
		contiguous: true,
        zipCodes: [[35801, 35816]],
        area: 52419,
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
        zipCodes: [[99501, 99524]],
        area: 663300,
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
        zipCodes: [[96799, 96799]],
        area: 76.83,
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
        zipCodes: [[85001, 85055]],
        area: 113998,
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
        zipCodes: [[72201, 72217]],
        area: 53179,
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
        zipCodes: [[94203, 94209], [90001, 90089], [90209, 90213]],
        area: 163696,
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
        zipCodes: [[80201, 80239]],
        area: 104185,
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
        zipCodes: [[06101, 06112]],
        area: 5543.3,
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
        zipCodes: [[19901, 19905]],
        area: 1981,
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
        zipCodes: [[20001, 20020]],
        area: 68.34,
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
        zipCodes: [[96941, 96944]],
        area: 271,
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
        zipCodes: [[32501, 32509], [33124, 33190], [32801, 32837]],
        area: 65755,
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
        zipCodes: [[30301, 30381]],
        area: 59425,
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
        zipCodes: [[96910, 96932]],
        area: 210,
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
        zipCodes: [[96801, 96830]],
        area: 10931,
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
        zipCodes: [[83254, 83254]],
        area: 83642.1,
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
        zipCodes: [[60601, 60641], [62701, 62709]],
        area: 57914.6,
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
        zipCodes: [[46201, 46209]],
        area: 36418,
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
        zipCodes: [[52801, 52809], [50301, 50323]],
        area: 56272.8,
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
        zipCodes: [[67201, 67221]],
        area: 82278,
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
        zipCodes: [[41701, 41702]],
        area: 40409.1,
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
        zipCodes: [[70112, 70119]],
        area: 52377.8,
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
        zipCodes: [[04032, 04034]],
        area: 35385,
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
        zipCodes: [[96960, 96960], [96970, 96970]],
        area: 70,
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
        zipCodes: [[21201, 21237]],
        area: 12407,
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
        zipCodes: [[02101, 02137]],
        area: 10565,
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
        zipCodes: [[49036, 49036], [49734, 49735]],
        area: 96715.9,
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
        zipCodes: [[55801, 55808]],
        area: 86942.9,
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
        zipCodes: [[39530, 39535]],
        area: 48430,
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
        zipCodes: [[63101, 63141]],
        area: 69715,
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
        zipCodes: [[59044, 59044]],
        area: 147040,
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
        zipCodes: [[68901, 68902]],
        area: 77358,
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
        zipCodes: [[89501, 89513]],
        area: 110567,
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
        zipCodes: [[03217, 03217]],
        area: 9349,
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
        zipCodes: [[07039, 07039]],
        area: 8722.6,
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
        zipCodes: [[87500, 87506]],
        area: 121697,
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
        zipCodes: [[10001, 10048]],
        area: 54555,
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
        zipCodes: [[27565, 27565]],
        area: 53818.8,
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
        zipCodes: [[58282, 58282]],
        area: 70762,
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
        zipCodes: [[96950, 96950]],
        area: 179,
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
        zipCodes: [[44101, 44179]],
        area: 44825,
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
        zipCodes: [[74101, 74110]],
        area: 69959.8,
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
        zipCodes: [[97201, 97225]],
        area: 98466.1,
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
        zipCodes: [[96939, 96940]],
        area: 177.2,
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
        zipCodes: [[15201, 15244]],
        area: 46055.4,
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
        zipCodes: [[00600, 00799], [00900, 00999]],
        area: 3515,
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
        zipCodes: [[02840, 02841]],
        area: 1212,
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
        zipCodes: [[29020, 29020]],
        area: 32020,
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
        zipCodes: [[57401, 57402]],
        area: 77116,
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
        zipCodes: [[37201, 37222]],
        area: 42143,
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
        zipCodes: [[78701, 78705]],
        area: 268597,
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
        zipCodes: [[84321, 84323]],
        area: 84898.8,
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
        zipCodes: [[05751, 05751]],
        area: 9616,
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
        zipCodes: [[00801, 00804]],
        area: 133.7,
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
        zipCodes: [[24517, 24517]],
        area: 42774.6,
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
        zipCodes: [[98004, 98009]],
        area: 71362,
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
        zipCodes: [[25813, 25813]],
        area: 24038,
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
        zipCodes: [[53201, 53228]],
        area: 65498,
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
        zipCodes: [[82941, 82941]],
        area: 97914,
        population: {
            year: 2018,
            count: 0
        }
	}
];
