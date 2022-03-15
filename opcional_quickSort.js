function quickSort( nums ) {
    if ( nums.length < 2 ) {
      return nums;
    }
    const pivot = nums[0 ];
    let left = [];
    let right = [];
    let equal = [];

    nums.forEach( num => ( num < pivot ) ? left.push( num ) : 
                         ( num > pivot ) ? right.push( num ) : equal.push( num ) );

    return [...quickSort( left ), ...equal, ...quickSort( right ) ];
}

let nums = [ 2, 5, 4, 6, 2, 0, 1, -5, 7, 49 ];
const { performance } = require('perf_hooks');
const start = performance.now();

let result = quickSort( nums );

console.log( result );
console.log(`This took ${performance.now() - start} milliseconds to run`);