var pistas = [
    { id: 1, tipo: "visual",   texto: "un cuadro tiene 4 lados",   valor: 4 },
    { id: 2, tipo: "auditiva", texto: "el reloj suena 2 veces",     valor: 2 },
    { id: 3, tipo: "visual",   texto: "8 cajones",              valor: 8 },
    { id: 4, tipo: "olfativa", texto: "3 frascos reactivos",      valor: 3 },
    { id: 5, tipo: "visual",   texto: "6 cristales rotos",  valor: 6 }
];

var extra = { id: 6, tipo: "tactil", texto: "5 botones en el dispositivo", valor: 5 };
var todasPistas = [...pistas, extra]; //para esparcir los objetos creados

var mapa = new Map(); // uilizo el metodo map para asociar ids con textos
pistas.forEach(function(p) { mapa.set(p.id, p.texto); });  // utlizando set para obtener valores unicos

var tipos = new Set(pistas.map(function(p) { return p.tipo; })); //ademas elimino duplicados con el set

function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = texto;
    document.getElementById("pistas").appendChild(linea);
}

function limpiar() {
    document.getElementById("pistas").innerHTML = "";
}

function verTodas() {   // este metodo me permite crear una nueva colección sin alterar la original
    limpiar();
    var textos = todasPistas.map(function(p) { return p.tipo + ": " + p.texto; });
    textos.forEach(function(t) { mostrar(t); });
    mostrar("tipos unicos: " + [...tipos].join(", "));
}

function soloVisuales() {
    limpiar();
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; }); //Primero filtro el array para quedarme con los objetos de tipo visual
    visuales.forEach(function(p) {
        var { texto, valor } = p;
        mostrar(texto + " - valor: " + valor);
    });
}

function verMapa() {  //ahora transformo esos objetos en un array de números simples
    limpiar();
    var ids = Array.from(mapa.keys());
    mostrar("ids en el mapa: " + ids.join(", "));
    mostrar("pista 3: " + mapa.get(3));
}

function calcular() {
    limpiar();
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; });
    var valores = visuales.map(function(p) { return p.valor; });
    var suma = valores.reduce(function(b, v) { return b + v; }, 0);  //para evitar errores si el array de visuales llegara a estar vacío por alguna razón
    mostrar("valores: " + valores.join(" + "));
    mostrar("resultado: " + suma);
}

function comprobar() {
    var input = document.getElementById("clave").value;
    var resultado = document.getElementById("resultado");
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; });
    var clave = String(visuales.reduce(function(b, p) { return b + p.valor; }, 0));

    if (input === clave) {
        resultado.className = "exito rotundo";
        resultado.textContent = "Correcto, pasas a la sala 3";
        setTimeout(function() { location.href = "sala3.html"; }, 1500);
    } else {
        resultado.className = "error";
        resultado.textContent = "Clave incorrecta";
    }
}