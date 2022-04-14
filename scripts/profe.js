let principalProfe = document.getElementById("principalProfe");
let mainCrearGrupo = document.getElementById("mainCrearGrupo");
let irCrearCurso = document.getElementById("irCrearCurso");
let home = document.getElementById("home");
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
    "Sabies que l`aigua de bullir es pot utilitzar per regar plantes? fins i tot és millor."
];

//Eventos
home.addEventListener("click", ()=>{
    irPrincipal();
})
irCrearCurso.addEventListener("click", ()=>{
    vistaCrearCurso();
});


//funcion para reconocer al profesor
let profe;
let cursos = [];
let alumnos = [];
let principalProfe = document.getElementById("principalProfe");
let crearGrupoProfe = document.getElementById("crearGrupoProfe");
let irCrearCurso = document.getElementById("irCrearCurso");
let home = document.getElementById("home");


//Función para cambiar la vista principal a vista crear nuevo grupo.
function vistaCrearCurso(){
    if(principalProfe.style.display == "block"){
        principalProfe.style.display ="none";
    }
    if (mainCrearGrupo.style.display == "none"){
        mainCrearGrupo.style.display = "block";
    }
}

//Función para volver a la página principal desde cualquier otra vista.
function irPrincipal(){
    mainCrearGrupo.style.display = "none";
    principalProfe.style.display = "block";
}

//Función que permite el footer dinamico con los consejos.
function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById("footer").innerHTML = verConsejo;
}
//Función de tiempo que hace que cada 5 segundos cambie el consejo del footer.
let cambioConsejo = setInterval(footer, 5000);

// funcion para reconocer al profesor
document.addEventListener("DOMContentLoaded", async function () {
  let id = sessionStorage.getItem("id");
  await fetch(`http://localhost:8080/profesor/find${id}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      profe = response;
    });
  console.log(profe);
  document.getElementById("nProfe").innerHTML += " " + profe.name;
  document.getElementById("nomProfe").innerHTML += profe.name;
  document.getElementById("apProfe").innerHTML += profe.lastName;
  document.getElementById("emailProfe").innerHTML += profe.email;
  document.getElementById("contraProfe").innerHTML += profe.password;
  sessionStorage.setItem("profe", profe);
  await fetch(`http://localhost:8080/curso/profesor${id}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      cursos = response;
    });
  console.log(cursos);
  for (let i = 0; i < cursos.length; i++) {
    document.getElementById(
      "cursos"
    ).innerHTML += `<button class="grups" onclick="abrircurso(${i})" style="width:200px;"><b>${cursos[i].name}</b></button>`;
  }
});
// funcion para reconocer al profesor
//carga un curso 
async function abrircurso(index) {
    document.getElementById('perfilProfe').style.display="block";
    document.getElementById('principalProfe').style.display="none";
  document.getElementById("holas").innerHTML = cursos[index].name;
  await fetch(`http://localhost:8080/curso/alumno${cursos[index].id}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      alumnos = response;
    });
  console.log(alumnos);
  document.getElementById("listAlumnos").innerHTML = "";
  document.getElementById("listAlumnos2").innerHTML = "";
  for (let i = 1; i < alumnos.length + 1; i++) {
    if (i % 2 == 0) {
      document.getElementById("listAlumnos").innerHTML += `<div class="d-flex f-row">
      <button onclick="verAlumno(${i-1})" style="background:transparent; width:250px; heigth:10px;">
            <h5 class="listAl2">${
              alumnos[i - 1].lastName + " " + alumnos[i - 1].name
            }</h5>
        </button>
            </div>`;
    } else {
      document.getElementById("listAlumnos2").innerHTML += `<div class="d-flex f-row">
      <button onclick="verAlumno(${i-1})" style="background:transparent; width:250px; heigth:10px;">
            <h5 class="listAl2">${
              alumnos[i - 1].lastName + " " + alumnos[i - 1].name
            }</h5>
        </button>
            </div>`;
    }
  }
}
//carga un curso 

function verAlumno(i){

}