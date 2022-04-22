let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexof(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if(isNumero(num.ariaValueNow) && !inlista(num.ariaValueNow, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert ('valor invalido ou nao encontrado na lista')
    }
}