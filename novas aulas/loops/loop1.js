/*for (let index = 0; index < 10; index++) {
    console.log(index)
}*/ //o que fizemos? o index começou no 0 e o fizemos aumentar 1 numero ate chegar no 10 e parar

const carros = ['ferrari', 'tesla', 'mercedes']; //o loop tambem funciona com listas

/*for (let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}*/ //o que nos fizemos? o i começa com 0 e nos iremos executar esse loop ate o i ser do tamanho da lista carros e depois da execuçao vai acrescentar um 1

/*for (let carro of carros) {
    console.log(carro)
}*/ //para cado carro da lista de carros nos iremos logar o carro

/*carros.forEach(function(carro, index){
    console.log(index)
    console.log(carro)
}) //essa funçao sera executada para cada item */

let index = 0;

/*while (index < 10) {
    console.log("index e menor do que 10")
}*/ //geramos um loop infinto porque index sempre sera menor que 10

while (index < 10) {
    console.log("index e menor do que 10")
    index = index + 1 //nos tambem podemos colocar = index+= 1 e index++
}

const pessoa = {
    nome: 'jane',
    idade: '21',

}

for (propiedades in pessoa) {
    console.log(pessoa[propiedades]);
}