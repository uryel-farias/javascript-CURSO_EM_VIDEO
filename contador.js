window.addEventListener("load", () => {

    // tempo em segundos que queremos.
    let sec = 90;

    const countDiv = document.getElementById("timer")

    const secpass = () => {

        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;

        //adiciona o zero antes dos segundos
        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }

        //adiciona o sero antes do minuto
        if (min < 10 ) {
            min = "0" + min;
        }

        //vai gerar o formmato mm:ss  ...ex: 05:45
        countDiv.innerHTML = min + ":" + segundosRestantes;

        if (sec > 0) {
            sec = sec - 1;
        } else {
            countDiv.innerHTML = "Acabou!";
        }
    };

    const countDown = setInterval(() => secpass(), 1000);
});