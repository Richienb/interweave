import test from 'ava';
import interweave from './index.js';

test('main', t => {
	t.deepEqual([...interweave([1, 3, 5], [2, 4])], [1, 2, 3, 4, 5]);
});
