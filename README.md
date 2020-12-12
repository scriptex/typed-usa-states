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

## Usage

```sh
npm i typed-usa-states

# or

yarn add typed-usa-states
```

## Usage

```javascript
import { usaStates } from 'typed-usa-states';
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
