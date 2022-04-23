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
      valores.push(Number(num.ariaValueMax))
      let item = document.createElement('option')
      item.text = `valor ${num.ariaValueMax} adcionado`
      lista.appendChild(item)
    } else {
        window.alert ('valor invalido ou nao encontrado na lista')
    }
    num.ariaValueNow = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adcionar valores antes de finalizar')
    } else {
        let tot = valores.length


        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${tot} elementos</p>`
    }

}