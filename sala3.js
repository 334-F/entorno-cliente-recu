import { Cerradura, CerraduraDigital } from "./clases.js";

var boveda = new CerraduraDigital("boveda-01", "2049");

function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = texto;
    document.getElementById("pistas").appendChild(linea);
}

function verSistema() {
    mostrar(boveda.info());
    mostrar("cerraduras creadas: " + Cerradura.getTotal());
    mostrar("intentos fallidos: " + boveda.getFallos());
}

function verAcertijo() {
    mostrar("anio de nacimiento del creador de Linux mas 80");
}

function verPista() {
    mostrar("Linus Torvalds nacio en 1969");
    mostrar("1969 + 80 = ?");
}

function intentar() {
    var input = document.getElementById("codigo").value;
    var resultado = document.getElementById("resultado");

    if (boveda.abrir(input)) {
        resultado.className = "exito";
        resultado.textContent = "Correcto, has escapado!";
        setTimeout(function() { location.href = "final.html"; }, 1500);
    } else {
        resultado.className = "error";
        resultado.textContent = "Incorrecto. Fallos: " + boveda.getFallos();
    }
}

window.verSistema = verSistema;
window.verAcertijo = verAcertijo;
window.verPista = verPista;
window.intentar = intentar;