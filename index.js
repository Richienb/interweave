export default function interweave(...iterables) {
	return {
		* [Symbol.iterator]() {
			const iterators = new Set(iterables.map(iterable => {
				if (!iterable[Symbol.iterator]) {
					throw new TypeError('All values must be iterable');
				}

				return iterable[Symbol.iterator]();
			}));

			while (iterators.size > 0) {
				for (const iterator of iterators) {
					const {value, done} = iterator.next();

					if (done) {
						iterators.delete(iterator);
					} else {
						yield value;
					}
				}
			}
		},
	};
}
