// Add your functions here
function map(source, func) {
  let r = [];

  for (let i = 0; i < source.length; i++) {
    let b = source[i];
    r.push(func(b));
  }

  return r;
}

function reduce(source, func, starting) {
  let r = !!starting ? starting : source[0];
  let i = !!starting ? 0 : 1;

  for (; i < source.length; i++) {
    r = func(source[i], r);
  }

  return r;
}
