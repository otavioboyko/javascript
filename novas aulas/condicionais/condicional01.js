const soma = 1 + 2

if (soma === 2) {
    console.log("a soma e 2")
} else if(soma === 3) {
    console.log('a soma e 3')
} else {
    console.log('a soma nao e 2')
}

//&& esses simbolos checam por duas condiçoes
//||

const soma1 = 2 + 2
const soma2 = 3 + 3

if (soma1 === 4 && soma2 === 6) { //se a soma1 for igual a quatro E se a soma2 for igual a seis
    console.log('a soma1 e 4 e a soma2 e 6')
}

if (soma1 === 4 || soma2 === 5) { //essas duas barrinhas verificam as condiçoes, e se ao menos uma or true o codigo passa
    console.log('a soma1 e 4 e a soma2 e 6')
}

let numero = soma === 2 ? 2 : 4  //o que colocarmos depois da interrogaçao so sera executado se a condiçao for true

if (soma === 2) {
    numero = 2
} else {
    numero = 4
}

console.log(numero)

const carros = 'tesla'

switch (carros) {
    case 'mercedes':
     console.log('mercedes e nao sei o que')
     break;
    case 'ferrari':
     console.log('ferrari e nao sei o que')
    break;
    case 'tesla':
     console.log('tesla e nao sei o que')
    break
}