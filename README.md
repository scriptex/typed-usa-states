[![Travis CI](https://travis-ci.com/scriptex/typed-usa-states.svg?branch=master)](https://travis-ci.com/scriptex/typed-usa-states)
[![Github Build](https://github.com/scriptex/typed-usa-states/workflows/Build/badge.svg)](https://github.com/scriptex/typed-usa-states/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/typed-usa-states/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/typed-usa-states&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-typed-usa-states-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/typed-usa-states/badge)](https://www.codefactor.io/repository/github/scriptex/typed-usa-states)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/typed-usa-states/README.md?pixel)](https://github.com/scriptex/typed-usa-states/)

# Typed USA States

> An array of geographical data for all USA states with full TypeScript support

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/typed-usa-states?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/typed-usa-states?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/typed-usa-states?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/typed-usa-states)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/typed-usa-states?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/typed-usa-states?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/typed-usa-states?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/typed-usa-states?style=plastic)

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
-   Northern Mariana Islands
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

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
