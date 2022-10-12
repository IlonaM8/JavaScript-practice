function memoize(fn) {
  let cache = {};
  return function (num) {
    if(num in cache){
      return `Fetching from cache for ${cache[num]}`;
    } else {
      cache[num] = fn(num);
      return `Calculating result for ${cache[num]}`;
    }


  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));


