/**
 * 
 * Permite convertir numero del mes en letras
 * 
 * @since 2023-02-01
 * @author JORGE ANDRES DIAZ BELEÑO <ing.jorgediaz@outlook.com>
 * 
 * pasalo a tu lenguaje favorito!!!
 * 
 */


/**
 * Convierte el numero del mes en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLMeses(num) {

    switch (num) {
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
    }

    return "";
}

console.log(NLMeses(9));