const x = ''; //uma string vazia sempre sera false

const y = 0 //um number vazio sempre sera false

const a = null; //null tambem sempre sera false

const b = undefined; //undefined tambem sempre sera false

console.log(!!x); //com os dois pontos de exclamaçao podemos ver se o comando e falso ou verdadeiro

const lista = []; //uma lista vazia e true

const objeto = {}; //um objeto vazio tambem sera true

console.log(!![])

//resumindo: !!=checam se as variaveis sao true ou false !=invertem (se or true vira false e vice-versa)