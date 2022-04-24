let amiga = {nome: 'alcmene',
sexo: 'F',
peso: '85.4',
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amiga.engordar(2)
console.log(`${amiga.nome} pesa ${amiga.peso} kg`)