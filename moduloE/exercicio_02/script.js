function calcularTabuada() {
    //pega o numero do html em forma de texto
    let numero = document.getElementById('idNumero')
    let tab = document.getElementById('idSeletor')

    if (numero.value.length == 0) {
        window.alert('Por favor, Digite um número!')
        
    } else {
        
        let n = Number(numero.value) //converte o dado do html para number
        let c = 1 // inicio do contador
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option') // cria um option no seletor html
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) 
            c++
            
        }


    }
    

    
   


}