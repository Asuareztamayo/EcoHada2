//funcion inicial para cargar datos
let alumno;
document.addEventListener("DOMContentLoaded", async function () {
    let id = sessionStorage.getItem("id");
    await fetch(`http://localhost:8080/alumno/find${id}`)
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
            alumno = response;
        });
    console.log(alumno);
    document.getElementById("nAlumno").innerHTML += " " + alumno.name;
    document.getElementById("xp").innerHTML = alumno.xp;
    sessionStorage.setItem("alumno", alumno);
});
//funcion inicial para cargar datos

let home = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let irRetos = document.getElementById("retosActuales");
// let irVoluntarios = document.getElementById("retosVoluntarios");
let irTerminados = document.getElementById("retosCompletos");
let retoIndividual = document.getElementsByClassName("btnReto");
let consejos = [
    "Separa les escombraries.",
    "Apaga els llums.",
    "Desendolla el que no s'estigui fent servir.",
    "Tanca tancament les aixetes.",
    "Utilitza bosses reutilitzables.",
    "Utilitza bombetes LED.",
    "Reutilitza.",
    "Evita utilitzar piles.",
    "Evita els aerosols.",
    "Consumeix productes de temporada.",
    "Utilitza el transport públic.",
    "Porta els medicaments caducats a la farmàcia.",
    "Aneu caminant sempre que pugueu.",
];

home.addEventListener("click", () => {
    irPrincipal();
});
irRetos.addEventListener("click", () => {
    verRetos();
});
// irVoluntarios.addEventListener("click", ()=>{
//     verVoluntarios();
// });
irTerminados.addEventListener("click", () => {
    verRetosTerminados();
});
// retoIndividual.addEventListener("click", () => {
// //  verRetoIndividual();
// });

function irPrincipal() {
    if (mainPrincipal.style.display == "none") {
        mainPrincipal.style.display = "block";
    }
    if (mainRetos.style.display == "block") {
        mainRetos.style.display = "none";
    }
    if (mainIndividual.style.display == "block") {
        mainIndividual.style.display = "none";
    }
    if (mainHecho.style.display == "block") {
        mainHecho.style.display = "none";
    }
}

function verRetos() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainRetos.style.display == "none") {
        mainRetos.style.display = "block";
    }
}

// function verVoluntarios(){
//     if (mainPrincipal.style.display == "block") {
//         (mainPrincipal.style.display = "none")
//     }
//     if (mainVoluntarios.style.display == "none") {
//         (mainVoluntarios.style.display = "block")
//     }
// }

function verRetosTerminados() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainHecho.style.display == "none") {
        mainHecho.style.display = "block";
    }
}

function verRetoIndividual() {
    if (mainRetos.style.display == "block") {
        mainRetos.style.display = "none";
    }
    if (mainIndividual.style.display == "none") {
        mainIndividual.style.display = "block";
    }
}

function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    console.log("El consejo es " + verConsejo);
    document.getElementById("footer").innerHTML = verConsejo;
}

let cambioConsejo = setInterval(footer, 5000);
