// Product of Largest Pair

function maxProduct(a) {
  let sorted = a.sort((a, b) => a - b)
  let last = sorted[sorted.length - 1]
  let secondLast = sorted[sorted.length - 2]
  let sum = (last * secondLast)
  return sum
}
