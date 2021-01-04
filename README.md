[![GitHub release](https://img.shields.io/github/release/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/typed-usa-states.svg)](https://github.com/scriptex/typed-usa-states/commits/master)
[![Build Status](https://travis-ci.com/scriptex/typed-usa-states.svg?branch=master)](https://travis-ci.com/scriptex/typed-usa-states)
[![npm](https://img.shields.io/npm/dt/typed-usa-states.svg)](https://www.npmjs.com/package/typed-usa-states)
[![npm](https://img.shields.io/npm/v/typed-usa-states.svg)](https://www.npmjs.com/package/typed-usa-states)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/typed-usa-states/README.md)](https://github.com/scriptex/typed-usa-states/)

# Typed USA States

An array of geographical data for all USA states with full TypeScript support

## Content

This package contains geographical data for all USA states including:

-   `name` of the state
-   `abbreviation` of the state
-   `territory`: whether the state is under the sovereign jurisdiction of the federal government of the United States
-   the `capital` city of the state
-   `contiguous`: whether the state shares common borders with other states
-   `zipCodes`: an array containing string arrays. Each array contains two elements (string) - the start and the end of the zip code range. (The `string` type is used because TypeScript does not like numbers with leading zero. Pull request are welcome if you find a workaround for this issue.)
-   `area`: the area of the state in square miles in the following format:
    -   `year`: when was the value last updated
    -   `value`: the actual area
-   `population`: the population of the state in the following format:
    -   `year`: when was the value last updated
    -   `count`: the actual population
-   `counties` of the state

**NB**
There is no counties information for the following US overseas territories:

-   American Samoa
-   Federated States Of Micronesia
-   Marshall Islands
-   Northern Mariana Islands
-   Palau
-   Puerto Rico
-   Virgin Islands

If you happen to have any knowledge on the matter, please consider contributing!

### Cities

This package provides data for all cities in the US.

You can use this by importing the cities array:

```javascript
import { usaCities } from 'typed-usa-states';
```

Each city object contains the following data:

-   `name`: the name of the city
-   `state`: the state which the city belongs to

## Installation

```sh
npm i typed-usa-states

# or

yarn add typed-usa-states
```

## Usage

Since the size of the array is pretty big, you can choose which states data to import in your application.

There are several predefined exported arrays with data for the states.

Their content's schema is explained below:

### Import the full states data

```typescript
import { usaStatesFull } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean,
	zipCodes: [string, string][],
	area: {
		year: number,
		value: number
	},
	population: {
		year: number,
		count: number
	},
	counties: string[]
}
```

---

### Import only the required data

```typescript
import { usaStates } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean
}
```

---

### Import the required and area data

```typescript
import { usaStatesWithArea } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean,
	area: {
		year: number,
		value: number
	}
}
```

---

### Import the required and counties data

```typescript
import { usaStatesWithCounties } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean,
	counties: string[]
}
```

---

### Import the requied and population data

```typescript
import { usaStatesWithPopulation } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean,
	population: {
		year: number,
		count: number
	}
}
```

---

### Import the required and zipcode data

```typescript
import { usaStatesWithZipCodes } from 'typed-usa-states';
```

Schema:

```
{
	name: string,
	abbreviation: string,
	territory: boolean,
	capital: string,
	contiguous: boolean,
	zipCodes: [string, string][]
}
```

---

### Import the cities data

```typescript
import { usaCities } from 'typed-usa-states';
```

Schema:

```
{
	city: string;
	state: string;
}
```

## Usage in browser

You can use the module directly in the browser (without any module bundler such as Webpack or Parcel) but you will need to include `requirejs`.

The usage is not so straight-forward, so please refer to the [demo](https://github.com/scriptex/typed-usa-states/blob/master/demo/index.html)

## Module bundlers

`typed-usa-states` exposes several pretty large arrays. 

It is possible that you experience issues with insufficient memory when using `create-react-app` or Webpack, Parcel, Rollup, etc. or if you are using the package in Docker or other CI environment.

In this case you might want to import the required array directly instead of relying on the module bunlder to resolve it for you.

This means that you need to change your code like this:

```diff
- import { usaStates } from 'typed-usa-states';
+ import { usaStates } from 'typed-usa-states/dist/states';

- import { usaCities } from 'typed-usa-states';
+ import { usaCities } from 'typed-usa-states/dist/cities';

- import { usaStatesFull } from 'typed-usa-states';
+ import { usaStatesFull } from 'typed-usa-states/dist/states-full';

- import { usaStatesWithArea } from 'typed-usa-states';
+ import { usaStatesWithArea } from 'typed-usa-states/dist/states-with-area';

- import { usaStatesWithCounties } from 'typed-usa-states';
+ import { usaStatesWithCounties } from 'typed-usa-states/dist/states-with-counties';

- import { usaStatesWithPopulation } from 'typed-usa-states';
+ import { usaStatesWithPopulation } from 'typed-usa-states/dist/states-with-population';

- import { usaStatesWithZipCodes } from 'typed-usa-states';
+ import { usaStatesWithZipCodes } from 'typed-usa-states/dist/states-with-zipcodes';
```

## Typings

The package exports several types which can be used in TypeScript environment.
The typings are located in `dist/index.d.ts` and are being auto detected by TypeScript.

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Ftyped-usa-states&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
