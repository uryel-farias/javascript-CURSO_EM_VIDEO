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

        var img = document.createElement('img') //criando imagem com js. Criamos assim uma tag img
        img.setAttribute('id', 'foto') // agora criamos um id e nomeamos ele de foto para a tag img
        
        if (fsex[0].checked) {
            genero ='Masculino'
            if (idade >= 0 && idade < 10) {
                //img.src('criancaMenino.jpg')
                img.setAttribute('src', 'criancaMenino.jpg')
                //criança
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoHomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancaMenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoMulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoMulher.jpg')
            } 
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Os dados informados são de uma pessoa do gênero ${genero} que tem ${idade} anos.\n`
        res2.style.textAlign = 'center'
        res2.appendChild(img)


    }

}