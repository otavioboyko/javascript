let valores = [8, 15, 16, 42, 51, 61]
valores.sort()
/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}*/



for(let pos in valores) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}