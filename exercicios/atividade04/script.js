function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.nodeValue.length == 0 || passo.nodeValue.length == 0) {
        window.alert('ERRO!!! numero invalido')
    } else {
       res.innerHTML = 'contando:'
    }
}