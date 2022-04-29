//string=texto

const msg = 'otávio'

//msg.length: mostra quantos caracteres a string tem

console.log(msg.length)

const nome = 'otávio'
const sobrenome = 'boyko'
const nomes = 'otavio, elessandro, salete'

console.log('meu nome e ' +  nome + ' ' + sobrenome) //forma antiga de colocar duas variaveis juntas
console.log(`meu nome e ${nome} ${sobrenome}`) //forma mais recente de colocar duas variaveis juntas
console.log(`meu nome e ${nome.toLocaleUpperCase()} ${sobrenome.toLocaleLowerCase()}`);
/*
toLocaleUpperCase()= deixa tudo maisculo
toLocaleLowerCase()=deixa tudo minusculo
*/
console.log(nomes.split(",")); //coloca as variaveis em listas