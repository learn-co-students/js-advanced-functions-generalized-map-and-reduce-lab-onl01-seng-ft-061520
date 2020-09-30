// Add your functions here
u= map([1, 2, 3, -9], function(a){ return a * a })
z= map([1, 2, 3, -9], function(a){ return -1 * a } )
sourceArray = [1,2,3]
reduce(sourceArray, function(e, memo){return e + memo})

function map(array, func) {
    let r = []
    for (let i = 0; i < array.length; i++) {
        let theElement = array[i]
        r.push(func(theElement))
    }
    return r;
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
    debugger
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
    return r;
  }