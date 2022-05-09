function sum(a, b = 10) {
 return a + b
}

const sumARROW = (a, b = 10) => a + b

const sumValue = sumARROW(2)

console.log(sumValue)