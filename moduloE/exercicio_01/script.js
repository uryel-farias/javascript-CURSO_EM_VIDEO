function contar() {

    let inicio = document.getElementById('inicio') 
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        resultado.innerHTML= 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for (let contador = i; contador <= f; contador+= p){
            resultado.innerHTML += `${contador} ` 
                       
        }
    }
        
    


}