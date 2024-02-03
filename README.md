# npi-validator

Validation function for National Provider Identifier (NPI) numbers. Works for healthcare physicians and organizations in the United States or other countries that use the NPI standard.

This is an implementation of the Luhn formula (mod 10 double add double) check digit, see the [CMS.gov specification](https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf) for more information.

## Install

```sh
npm install npi-validator
```

## Usage

```js
import npiValid from 'npi-validator';

const npi = 1234567893;
const valid = npiValid(npi);

console.log(valid);
//=> true
```

## API

### `function npiValid(id: string | number, prefix?: string | number): boolean`

```js
import npiValid from 'npi-validator';

const npi = 1234567893;
const valid = npiValid(npi);

console.log(valid);
//=> true
```
