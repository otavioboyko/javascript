const nomes = ["otavio", "elessandro", "salete", 10, false];

const elessandro = nomes[0] //acessar nomes

//console.log(elessandro)

//nomes.push("felipe") adciona no final da lista

console.log(nomes)

nomes.shift(0) //remove coisas da lista

console.log(nomes)

nomes.unshift(20)  //adciona coisas no começo da lista

console.log(nomes)

nomes.pop() //remove o ultimo elemento da lista
nomes.pop() 
nomes.pop() 

console.log(nomes)

nomes[2] = 'edson'

console.log(nomes.indexOf('elessandro'))

console.log(nomes)

const sort = nomes.sort() //organiza a lista em ordem alfabetica e numerica

const array = Array.isArray(nomes)

console.log(nomes.length) //mostra quantos itens tem na lista
console.log(sort)
console.log(array)