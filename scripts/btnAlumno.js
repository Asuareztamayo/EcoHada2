let home = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let mainJuego = document.getElementById("mainJuegoExtra");
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

home.addEventListener("click", () => {
    irPrincipal();
});

function irPrincipal() {
    mainRetos.style.display = "none";
    mainIndividual.style.display = "none";
    mainHecho.style.display = "none";
    mainPrincipal.style.display = "block";
}

function verRetos() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainRetos.style.display == "none") {
        mainRetos.style.display = "block";
    }
}

function verRetosTerminados() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainHecho.style.display == "none") {
        mainHecho.style.display = "block";
    }
}

function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById("footer").innerHTML = verConsejo;
}

let cambioConsejo = setInterval(footer, 5000);
