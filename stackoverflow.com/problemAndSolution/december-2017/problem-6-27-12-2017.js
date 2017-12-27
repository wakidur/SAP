/**
 * How to clone an Iterator in javascript?
 * In ES6, is there any possible to clone an iterator states?
 * 
 * var ma = [1,2,3,4];
 * var it = ma[Symbol.iterator]();
 * it.next();
 * 
 * if I want to remember here the it states how should I do in javascritp?
 * what is remebered in it? since the
 * JSON.stringify(it) //it would just return {}
 */

/**
 * You can’t clone an arbitrary iterator, but you can create many distinct iterators from one by holding onto some state:
 *https://stackoverflow.com/questions/46416266/how-to-clone-an-iterator-in-javascript
 */

function tee(iterable) {
    const source = iterable[Symbol.iterator]();
    const buffers = [
        [],
        []
    ]; // substitute in queue type for efficiency
    const DONE = Object.create(null);

    const next = i => {
        if (buffers[i].length !== 0) {
            return buffers[i].shift();
        }
        const x = source.next();
        if (x.done) {
            return DONE;
        }

        buffers[1 - i].push(x.value);
        return x.value;
    };

    return buffers.map(function*(_, i) {
        for (;;) {
            const x = next(i);
            if (x === DONE) {
                break;
            }
            yield x;
        }
    });
}

const [a, b] = tee(iterator);
assert(a.next().value === b.next().value);