/**
Interweave multiple iterables

@param iterables Iterables of values to interweave.

@example
```
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
*/
export default function interweave<ValueType>(...iterables: Array<Iterable<ValueType>>): Iterable<ValueType>;
