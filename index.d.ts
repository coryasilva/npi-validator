/**
Validates NPI numbers. See the [CMS.gov specification](https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf) for more information.

@example
```
import npiValid from 'npi-validator';

const npi = 1234567893;
const valid = npiValid(npi);

console.log(valid);
//=> true
```

@param id - npi number; must be 10 digits
@param prefix - prefix number; defaults to 80840; must start with 80,the health prefix, and be followed by the 3 digit country code
*/
export function npiValid(id: string | number, prefix?: string | number): boolean;
