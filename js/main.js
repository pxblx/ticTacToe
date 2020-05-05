/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

addEventListener("DOMContentLoaded", function () {

    // Espacio donde se muestra el estado de la partida
    let infoP = document.getElementById("infoP"); // Texto de información
    let infoImg = document.getElementById("infoImg"); // Imagen de información

    // Listener para las celdas
    document.addEventListener("click", function (event) {
        let target = event.target;
        if (target.matches(".celda")) {
            try {
                target.classList.add(ticTacToe.getTurno(), "desactivada");
                ticTacToe.clickCelda(target.id);
                infoImg.src = "img/" + ticTacToe.getTurno() + ".png";
            } catch (resultado) {
                if (resultado === "empate") {
                    infoP.innerHTML = "Empate";
                    infoImg.style.display = "none";
                } else {
                    infoP.innerHTML = "Ha ganado";
                    infoImg.src = "img/" + resultado.ganador + ".png";
                    let celdas = document.getElementsByClassName("celda");
                    for (let i = 0; i < celdas.length; i++) {
                        let celda = celdas[i];
                        if (resultado.raya.includes(i)) celda.classList.add("raya");
                        celda.classList.add("desactivada");
                    }
                }
            }
        }
    });

    // Reiniciar la partida
    document.getElementById("reiniciar").addEventListener("click", function () {
        location.reload();
    });
});
