# @richienb/interweave

Interweave multiple iterables

## Install

```sh
npm install @richienb/interweave
```

## Usage

```js
import interweave from '@richienb/interweave';
import arrayDiffer from 'array-differ';

const query = 'unicorn';
const googleResults = await searchGoogle(query);
//=> ['Unicorn - Wikipedia', 'unicorn | Legend, History, & Facts | Britannica']
const duckDuckGoResult = arrayDiffer(await searchDuckDuckGo(query), googleResults);
//=> ['Unicorn | Definition of Unicorn by Merriam-Webster', 'Unicorn - definition of unicorn by The Free Dictionary']

console.log([...interweave(googleResults, duckDuckGoResult)]);
//=> ['Unicorn - Wikipedia', 'Unicorn | Definition of Unicorn by Merriam-Webster', 'unicorn | Legend, History, & Facts | Britannica', 'Unicorn - definition of unicorn by The Free Dictionary']
```

## API

### interweave(...iterables)

#### iterables

Type: `Iterable` (for example, `Array`)

Iterables of values to interweave.
