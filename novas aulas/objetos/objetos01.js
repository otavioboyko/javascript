const pessoa = {
    nome: 'daphne',
    sobrenome : 'ferdinand',
    idade: '16',
    hobbies: ['matematica',  'correr', 'natureza'],
    amiga: {
        name: 'clyo',
        sobrenome: 'alighieri',
        idade: '16',
    },
} //o objeto guarda valores dentro de propriedades

/*const nome = pessoa.nome
const sobrenome = pessoa.sobrenome
const idade = pessoa.idade
const hobbies = pessoa.hobbies*/

const {nome,
    sobrenome,
    idade,
    hobbies,
    amiga: { name }
    } = pessoa //com isso nos podemos acessar a const pessoa sem criar novas consts

console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)

const natureza = pessoa.hobbies[2]

console.log(natureza)

//pessoa.amiga = "clyo"

console.log(pessoa.amiga.idade)
console.log(amiga)