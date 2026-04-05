var clave = Symbol("codigo");
//he utlizado el codigo simbol para que el dato sea invisible excepto si tiene la llave correcta, es decir, el codigoo secreto correcto
var objeto = {
    nombre: "caja fuerte",
    color: "gris",
    ubicacion: {
        planta: 1,
        sala: "B"
    },
    getInfo: function () {
        return "planta " + this.ubicacion.planta + ", sala " + this.ubicacion.sala;  //uso this para que el codigo pueda ser reutilizado sin necesidad de cambiar el nombre del objeto
    },
    [clave]: "ALFA-7" //codigo secreto
};

var copia = Object.assign({}, objeto); // esto es un metodo de la copia superficial
// Se hace la copia al original, si el papel de la copia se borra, tambien se borra la original
function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = texto;
    document.getElementById("pistas").appendChild(linea);  //Añadir pistas
}

function pista1() {
    mostrar("Nombre: " + objeto.nombre);
}

function pista2() {
    mostrar("Planta: " + objeto.ubicacion.planta + ", sala: " + objeto.ubicacion.sala);
}

function pista3() {
    mostrar(objeto.getInfo());
}

function pista4() {
    mostrar("Dato oculto: " + objeto[clave]);
}

function pista5() {
    mostrar("Nombre en la copia: " + copia.nombre);
    mostrar("El simbolo no se ha podido copiar: " + copia[clave]);
}

function comprobar() {

    var input = document.getElementById("codigo").value;
    var resultado = document.getElementById("resultado");


    //para el majeo de errrores
    try { 

        if (input === objeto[clave]) {
            resultado.className = "exito";
            resultado.textContent = "Correcto, pasando a sala 2";
            setTimeout(function () { location.href = "sala2.html"; }, 1500);
        } else {
            resultado.className = "error";
            resultado.textContent = "Codigo incorrecto";
        }
    } catch (e) {
        resultado.className = "error";
        resultado.textContent = e.message;
    }
}