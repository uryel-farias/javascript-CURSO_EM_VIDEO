
function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    //hora = 13
    var minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora <= 12){
        img.src = 'amanhecer.png'
        document.body.style.background = '#f4c900'
    } else if ( hora > 12 && hora <= 18) {
        img.src = 'entardecer.png'
        document.body.style.background = '#fec3a5'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#252c46'
    }
}
