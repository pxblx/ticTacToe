/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

addEventListener("DOMContentLoaded", function () {

    // Celdas del tablero
    let tablero = [document.getElementById("y0x0"), document.getElementById("y0x1"), document.getElementById("y0x2"),
    document.getElementById("y1x0"), document.getElementById("y1x1"), document.getElementById("y1x2"),
    document.getElementById("y2x0"), document.getElementById("y2x1"), document.getElementById("y2x2")];

    // Espacio donde se muestra el estado de la partida
    let infoP = document.getElementById("infoP"); // Texto de información
    let infoImg = document.getElementById("infoImg"); // Imagen de información

    // Listeners para las celdas
    for (let i = 0; i < 9; i++) {
        tablero[i].addEventListener("click", function () {
            if (tablero[i].className === "") {
                tablero[i].classList.add(ticTacToe.getTurno(), "desactivada");
                try {
                    ticTacToe.clickCelda(i);
                    infoImg.src = "img/" + ticTacToe.getTurno() + ".png";
                } catch (resultado) {
                    if (resultado === "empate") {
                        infoP.innerHTML = "Empate";
                        infoImg.style.display = "none";
                    } else {
                        infoP.innerHTML = "Ha ganado";
                        infoImg.src = "img/" + resultado.ganador + ".png";
                        tablero.forEach((celda, indice) => {
                            if (resultado.raya.includes(indice)) celda.classList.add("raya");
                            celda.classList.add("desactivada");
                        });
                    }
                }
            }
        });
    }

    // Reiniciar la partida
    document.getElementById("reiniciar").addEventListener("click", function () {
        location.reload();
    });
});
