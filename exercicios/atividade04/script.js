function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res =

    if (ini.ariaValueMax.length == 0 || passo.ariaValueNow.length == 0) {
        window.alert('ERRO!!! numero invalido')
    } else {
        window.alert('tudo ok')
    }
}