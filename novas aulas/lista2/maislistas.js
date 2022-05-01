const numbers = [1, 2, 3, 4, 5]

const multiplicaçaopordois = numbers.map(function(number) {
    return number * 2
}) //esse map recebe uma function, o que o map ira fazer uma nova lista com a function, ou seja ele ira multiplicar os numbers por dois e criar uma nova lista com os numeros multiplicados

const ages = [8, 15, 16, 42, 26, 10]

console.log(multiplicaçaopordois)

const evenAges = ages.filter(function(ages){ //o filter filtra a variavel com base dos comandos de uma funçao
    return ages % 2 === 0
})

console.log(evenAges)

const somOfAges = ages.reduce(function(ages, acumulator){
    return acumulator - ages
}, 0)

console.log(somOfAges)