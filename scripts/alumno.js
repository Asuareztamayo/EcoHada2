let principal = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let irRetos = document.getElementById("retosActuales");
// let irVoluntarios = document.getElementById("retosVoluntarios");
let irTerminados = document.getElementById("retosCompletos");
let retoIndividual = document.getElementsByClassName("btnReto");


home.addEventListener("click", ()=>{
    irPrincipal();
})
irRetos.addEventListener("click", ()=>{
    verRetos();
});
// irVoluntarios.addEventListener("click", ()=>{
//     verVoluntarios();
// });
irTerminados.addEventListener("click", ()=>{
    verRetosTerminados();
});
retoIndividual.addEventListener("click", ()=>{
    verRetoIndividual();
});

function irPrincipal(){
    if (mainPrincipal.style.display == "none") {
        (mainPrincipal.style.display = "block")
    }
    if (mainRetos.style.display == "block") {
        (mainRetos.style.display = "none")
    }
    if (mainIndividual.style.display == "block") {
        (mainIndividual.style.display = "none")
    }
    if (mainHecho.style.display == "block") {
        (mainHecho.style.display = "none")
    }
}


function verRetos(){
    if (mainPrincipal.style.display == "block") {
        (mainPrincipal.style.display = "none")
    }
    if (mainRetos.style.display == "none") {
        (mainRetos.style.display = "block")
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

function verRetosTerminados(){
    if (mainPrincipal.style.display == "block") {
        (mainPrincipal.style.display = "none")
    }
    if (mainHecho.style.display == "none") {
        (mainHecho.style.display = "block")
    }
}

function verRetoIndividual(){
    if (mainRetos.style.display == "block") {
        (mainRetos.style.display = "none")
    }
    if (mainIndividual.style.display == "none") {
        (mainIndividual.style.display = "block")
    }
}