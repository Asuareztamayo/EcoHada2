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
let cursos;
document.addEventListener("DOMContentLoaded", async function () {
    let id = sessionStorage.getItem("id");
    await fetch(`http://localhost:8080/profesor/find${id}`)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            profe = response
        });
    console.log(profe);
    document.getElementById('nProfe').innerHTML += " " + profe.name;
    document.getElementById("nomProfe").innerHTML += profe.name;
    document.getElementById("apProfe").innerHTML += profe.lastName;
    document.getElementById("emailProfe").innerHTML += profe.email;
    document.getElementById("contraProfe").innerHTML += profe.password;
    // for (let i = 0; i < retosbd.length; i++){
    // document.getElementById("cursos").innerHTML += `<button class="grups"><b>${profe.cursos}</b></button>`
    // }
    sessionStorage.setItem("profe", profe);
    await fetch(`http://localhost:8080/curso/profesor${id}`)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            cursos = response
        });
    console.log(cursos);
});
// fin funcion para reconocer al profesor


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
