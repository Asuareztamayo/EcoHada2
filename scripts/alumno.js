//funcion inicial para cargar datos
let alumno;
document.addEventListener("DOMContentLoaded", async function () {
let id = sessionStorage.getItem("id");
await fetch(`http://localhost:8080/alumno/find${id}`)
.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
alumno = response});
console.log(alumno);
document.getElementById('nAlumno').innerHTML += " " + alumno.name;
document.getElementById('xp').innerHTML = alumno.xp;
sessionStorage.setItem("alumno", alumno);
asignarlvl();
});
//funcion inicial para cargar datos
function asignarlvl(){
    document.getElementById('categoria');
    let lvls = ["https://i.ibb.co/Pw0gMvC/penguin-42936-640.png","https://i.ibb.co/yNqzZ38/pug-4862083-640.png",
    "https://i.ibb.co/NyFkY4t/parrot-1417286-640.png","https://i.ibb.co/55VfBBd/shark-1454245-640.png",
    "https://i.ibb.co/jbKxynY/sea-turtle-3199593-640.png"];
    let subt = ["Pinguino limpia playas","Perro come restos","Pajaro Planta Arboles","Tiburon debora basura","ECO TORTUGA"];

            for (let index = 0; index < lvls.length; index++) {
                if(alumno.xp >= 0 && alumno.xp <50){
                    document.getElementById('categoria').innerHTML += 
                    `<img style="width: 250px; height:300px;" src="https://i.ibb.co/Pw0gMvC/penguin-42936-640.png"" alt="Lvl" border="0">
                    <div class="d-flex flex-column">
                        <h3>Pinguino limpia playas</h3>
                        <h5>Te faltan ${50- alumno.xp} xp para el siguiente nivel.</h5>
                    </div>`;
                    break;
                }else if(alumno.xp >= (index * 100) - 50){
                    document.getElementById('categoria').innerHTML = "";
                    document.getElementById('categoria').innerHTML += 
                    `<img style="width: 250px; height:300px;" src="${lvls[index]}" alt="Lvl" border="0">
                    <div class="d-flex flex-column">
                        <h3>${subt[index]}</h3>
                        <h5>Te faltan ${(((index+1) * 100) - 50)- alumno.xp} xp para el siguiente nivel.</h5>
                    </div>`;
                }else{
                    break;
                }
                
            
            }
        
    
}


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