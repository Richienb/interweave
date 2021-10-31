import {expectType} from 'tsd';
import interweave from './index.js';

expectType<Iterable<number>>(interweave([1, 3, 5], [2, 4]));
