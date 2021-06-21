function verificar() {
    var data =new Date()
    var ano = data.getFullYear()
    var formulario_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(formulario_ano.length == 0 || Number(formulario_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulario_ano.value)
        res.innerHTML =`Idade calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero ='Masculino'
        } else if (fsex[1].checked) {
            genero = 'Feminino' 
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Os dados indformados são de uma pessoa do gênero ${genero} que tem ${idade} anos.`


    }

}