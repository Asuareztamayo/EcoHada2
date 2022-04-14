//Variables llamando elementos del HTML
let home = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let mainJuego = document.getElementById("mainJuegoExtra");

//Array con los consejos que se imprimiran en el Footer.
let consejos = [
    "Separa les escombraries.",
    "Apaga els llums.",
    "Desendolla el que no s'estigui fent servir.",
    "Tanca correctament les aixetes.",
    "Utilitza bosses reutilitzables.",
    "Utilitza bombetes LED.",
    "Reutilitza.",
    "Evita utilitzar piles.",
    "Evita els aerosols.",
    "Consumeix productes de temporada.",
    "Utilitza el transport públic.",
    "Porta els medicaments caducats a la farmàcia.",
    "Aneu caminant sempre que pugueu.",
    "Tanca la aixeta quan et rentis els dents.",
    "Estableix un temps de dutxa.",
    "Surt mes a donar una volta, utilitza menys la tecología.",
    "Utilitza recipents de vidre, en comptes dels de plàstic.",
    "No llencis qualsevol líquid pel desguàs, l'aigua es contamina molt fàcilment.",
    "Si vas de passeig, recorda't d'emportar-te les restes.",
    "Sabies que l`aigua de bullir es pot utilitzar per regar plantes? fins i tot és millor.",
];

//Evento para volver a la vista principal
home.addEventListener("click", () => {
    irPrincipal();
});

//Volver a la vista principal
function irPrincipal() {
    mainRetos.style.display = "none";
    mainIndividual.style.display = "none";
    mainHecho.style.display = "none";
    mainPrincipal.style.display = "block";
}

//Cambio de main para ver los retos
function verRetos() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainRetos.style.display == "none") {
        mainRetos.style.display = "block";
    }
}

//Cambio de main para ver las medallas conseguidas
function verRetosTerminados() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainHecho.style.display == "none") {
        mainHecho.style.display = "block";
    }
}

//Función que nos permite el footer dinámico, cambiando con los objetos dentro de un array
function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById("footer").innerHTML = verConsejo;
}

let cambioConsejo = setInterval(footer, 5000);
