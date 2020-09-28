// Add your functions here
function map (sourceArray, callBack) {
  let arr = []
  for (let i=0; i < sourceArray.length; i++) {
    let method = sourceArray[i]
    arr.push(callBack(method))
  }
  return arr
}

function reduce(sourceArray, callBack, startingPoint) {
  let arr = (!!startingPoint) ? startingPoint : sourceArray[0]
  let i = (!!startingPoint) ? 0 : 1
  for ( ; i < sourceArray.length; i++) {
    arr = callBack(sourceArray[i], arr)
  }
  return arr
}
