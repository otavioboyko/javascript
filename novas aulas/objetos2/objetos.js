class Person {
    constructor(nome, sobrenome, idade) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }

    nomecompleto() {
        console.log `${this.nome} ${this.sobrenome}`
    }

    falar() {
        console.log('ola')
    }
}

const person = new Person("maria", "ninguem", "25")
console.log(Person)
person.nomecompleto()
person.falar()