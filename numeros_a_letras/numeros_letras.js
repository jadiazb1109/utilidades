/**
 * 
 * Permite convertir numero en letras de acuardo a su unidad de medida
 * 
 * @since 2023-02-01
 * @author JORGE ANDRES DIAZ BELEÑO <ing.jorgediaz@outlook.com>
 * 
 * pasalo a tu lenguaje favorito!!!
 * 
 */


/**
 * Convierte la unidades de numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLUnidades(num) {

    switch (num) {
        case 1:
            return "UN";
        case 2:
            return "DOS";
        case 3:
            return "TRES";
        case 4:
            return "CUATRO";
        case 5:
            return "CINCO";
        case 6:
            return "SEIS";
        case 7:
            return "SIETE";
        case 8:
            return "OCHO";
        case 9:
            return "NUEVE";
    }

    return "";
}

/**
 * Convierte la decenas de numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLDecenas(num) {

    let decena = Math.floor(num / 10);
    let unidad = num - (decena * 10);

    switch (decena) {
        case 1:
            switch (unidad) {
                case 0:
                    return "DIEZ";
                case 1:
                    return "ONCE";
                case 2:
                    return "DOCE";
                case 3:
                    return "TRECE";
                case 4:
                    return "CATORCE";
                case 5:
                    return "QUINCE";
                default:
                    return "DIECI" + NLUnidades(unidad);
            }
        case 2:
            switch (unidad) {
                case 0:
                    return "VEINTE";
                default:
                    return "VEINTI" + NLUnidades(unidad);
            }
        case 3:
            return NLDecenasY("TREINTA", unidad);
        case 4:
            return NLDecenasY("CUARENTA", unidad);
        case 5:
            return NLDecenasY("CINCUENTA", unidad);
        case 6:
            return NLDecenasY("SESENTA", unidad);
        case 7:
            return NLDecenasY("SETENTA", unidad);
        case 8:
            return NLDecenasY("OCHENTA", unidad);
        case 9:
            return NLDecenasY("NOVENTA", unidad);
        case 0:
            return NLUnidades(unidad);
    }
}

/**
 * Une las decenas con las unidades
 * @param {string} strSin Decenas en letras
 * @param {num} numUnidades Numero de unidades
 * @returns {string} union en letras
 */
function NLDecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
        return strSin + " Y " + NLUnidades(numUnidades)

    return strSin;
}

/**
 * Convierte la centenas de numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLCentenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - (centenas * 100);

    switch (centenas) {
        case 1:
            if (decenas > 0)
                return "CIENTO " + NLDecenas(decenas);
            return "CIEN";
        case 2:
            return "DOSCIENTOS " + NLDecenas(decenas);
        case 3:
            return "TRESCIENTOS " + NLDecenas(decenas);
        case 4:
            return "CUATROCIENTOS " + NLDecenas(decenas);
        case 5:
            return "QUINIENTOS " + NLDecenas(decenas);
        case 6:
            return "SEISCIENTOS " + NLDecenas(decenas);
        case 7:
            return "SETECIENTOS " + NLDecenas(decenas);
        case 8:
            return "OCHOCIENTOS " + NLDecenas(decenas);
        case 9:
            return "NOVECIENTOS " + NLDecenas(decenas);
    }

    return NLDecenas(decenas);
}

/**
 * Determina la unidad de medida del numero 
 * @param {int} num  Numero a determinar
 * @param {int} divisor Base en la que se divide el numero
 * @param {string} strSingular Moneda en singular
 * @param {string} strPlural Moneda en prural
 * @returns {string} El numero correspondiente en letras
 */
function NLSeccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = NLCentenas(cientos) + " " + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += "";
    else
        letras += " DE";

    return letras;
}

/**
 * Convierte los miles de numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLMiles(num) {
    let divisor = 1000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strCentenas = "";

    let strMiles = NLSeccion(num, divisor, "UN MIL", "MIL");
    if (resto > 0) {
        if (strMiles != "") {
            strCentenas += " ";
        }
        strCentenas += NLCentenas(resto);
    }

    if (strMiles == "")
        return strCentenas;

    return strMiles + strCentenas;
}

/**
 * Convierte los millones de numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLMillones(num) {
    let divisor = 1000000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMiles = "";

    let strMillones = NLSeccion(num, divisor, "UN MILLON", "MILLONES");

    if (resto > 0) {
        if (strMillones != "") {
            strMiles += " ";
        }
        strMiles += NLMiles(resto);
    }

    if (strMillones == "")
        return strMiles;

    return strMillones + strMiles;
}

/**
 * Convierte el numero en letras
 * @param {int} num Numero a convertir en letras
 * @returns {string} El numero correspondiente en letras
 */
function NLNumeroALetras(num) {
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: 'PESOS', // monedas
        letrasMonedaSingular: 'PESO', // moneda

        letrasMonedaCentavoPlural: "CENTAVOS",
        letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
        data.letrasCentavos = " CON " + (() => {
            if (data.centavos == 1)
                return NLMillones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
            else
                return NLMillones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
        })();
    };

    if (data.enteros == 0)
        return "CERO " + data.letrasMonedaPlural + "" + data.letrasCentavos;
    if (data.enteros == 1)
        return NLMillones(data.enteros) + "" + data.letrasMonedaSingular + "" + data.letrasCentavos;
    else
        return NLMillones(data.enteros) + " " + data.letrasMonedaPlural + "" + data.letrasCentavos;
}


console.log(NLNumeroALetras(15643546));