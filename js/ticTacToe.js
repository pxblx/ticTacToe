/**
 * ticTacToe
 * 
 * @author Pablo Murillo Ávila
 */

let ticTacToe = (function () {
    let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Tablero del juego
    let turno = "X"; // Turno acual (empiezan las X)

    /**
     * Poner ficha en la celda y comprobar la jugada
     * 
     * @param {Number} c Celda
     * 
     * @returns {String|Boolean} "X" o "O" si es jugada ganadora, "empate" si hay empate o false en caso contrario
     */
    let clickCelda = function (c) {
        tablero[c] = turno === "X" ? 2 : 3; // Colocar ficha (2 para las X y 3 para las O)
        turno = turno === "X" ? "O" : "X"; // Cambio de turno

        // Horizontal 1
        if (tablero[0] * tablero[1] * tablero[2] === 8) return "X";
        else if (tablero[0] * tablero[1] * tablero[2] === 27) return "O";
        
        // Horizontal 2
        if (tablero[3] * tablero[4] * tablero[5] === 8) return "X";
        else if (tablero[3] * tablero[4] * tablero[5] === 27) return "O";

        // Horizontal 3
        if (tablero[6] * tablero[7] * tablero[8] === 8) return "X";
        else if (tablero[6] * tablero[7] * tablero[8] === 27) return "O";

        // Vertical 1
        if (tablero[0] * tablero[3] * tablero[6] === 8) return "X";
        else if (tablero[0] * tablero[3] * tablero[6] === 27) return "O";

        // Vertical 2
        if (tablero[1] * tablero[4] * tablero[7] === 8) return "X";
        else if (tablero[1] * tablero[4] * tablero[7] === 27) return "O";

        // Vertical 3
        if (tablero[2] * tablero[5] * tablero[8] === 8) return "X";
        else if (tablero[2] * tablero[5] * tablero[8] === 27) return "O";

        // Diagonal 1
        if (tablero[0] * tablero[4] * tablero[8] === 8) return "X";
        else if (tablero[0] * tablero[4] * tablero[8] === 27) return "O";

        // Diagonal 2
        if (tablero[2] * tablero[4] * tablero[6] === 8) return "X";
        else if (tablero[2] * tablero[4] * tablero[6] === 27) return "O";

        // Empate
        if (tablero.every((celda) => celda !== 0)) return "empate";

        return false;
    }

    /**
     * Devolver el turno actual
     * 
     * @returns {Number} Turno actual
     */
    let getTurno = function () {
        return turno;
    }

    return {
        clickCelda: clickCelda,
        getTurno: getTurno
    }
})();
