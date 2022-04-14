let alumno;
let retosbd;
let idReto = document.getElementById("idReto");
let home = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let mainJuego = document.getElementById("mainJuegoExtra");
let irRetos = document.getElementById("retosActuales");
let irTerminados = document.getElementById("retosCompletos");
let contraseña = document.getElementById("contraseña");
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

contraseña.addEventListener("click", verCambiarContraseña );

home.addEventListener("click", () => {
    irPrincipal();
});
irRetos.addEventListener("click", () => {
    verRetos();
});
irTerminados.addEventListener("click", () => {
    verRetosTerminados();
});

//funcion inicial para cargar datos
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
    asignarlvl();
    verRetoAlumno();
    insignias();
});
//funcion inicial para cargar datos


function asignarlvl() {
    document.getElementById("categoria");
    let lvls = [
        "https://i.ibb.co/Pw0gMvC/penguin-42936-640.png",
        "https://i.ibb.co/yNqzZ38/pug-4862083-640.png",
        "https://i.ibb.co/NyFkY4t/parrot-1417286-640.png",
        "https://i.ibb.co/55VfBBd/shark-1454245-640.png",
        "https://i.ibb.co/jbKxynY/sea-turtle-3199593-640.png",
    ];
    let subt = [
        "Pinguino limpia playas",
        "Perro come restos",
        "Pajaro Planta Arboles",
        "Tiburon debora basura",
        "ECO TORTUGA",
    ];

    for (let index = 0; index < lvls.length; index++) {
        if (alumno.xp >= 0 && alumno.xp < 50) {
            document.getElementById(
                "categoria"
            ).innerHTML += `<img style="width: 250px; height:300px;" src="https://i.ibb.co/Pw0gMvC/penguin-42936-640.png"" alt="Lvl" border="0">
                    <div class="d-flex flex-column">
                        <h3>Pinguino limpia playas</h3>
                        <h5>Te faltan ${50 - alumno.xp
                } xp para el siguiente nivel.</h5>
                    </div>`;
            break;
        } else if (alumno.xp >= index * 100 - 50) {
            document.getElementById("categoria").innerHTML = "";
            document.getElementById(
                "categoria"
            ).innerHTML += `<img style="width: 250px; height:300px;" src="${lvls[index]
            }" alt="Lvl" border="0">
                    <div class="d-flex flex-column">
                        <h3>${subt[index]}</h3>
                        <h5>Te faltan ${(index + 1) * 100 - 50 - alumno.xp
                } xp para el siguiente nivel.</h5>
                    </div>`;
        } else {
            break;
        }
    }
}

function verRetoAlumno() {
    let retos = document.getElementById("retos");
    retosbd = alumno.tareas;
    for (let i = 0; i < retosbd.length; i++) {
        retos.innerHTML += `<div class="col-10">
                    <div class="d-flex flex-row m-4 retoHecho">
                        <h3 class="col-8">${retosbd[i].text}</h3>
                        <div class="d-flex align-items-end m-2">
                        <button onclick="verRetoIndividual(${retosbd[i].id})" class="btnReto"> + </button>
                    </div>
                    <div class="d-flex justify-content-end">
                        <img src="${retosbd[i].insignea.img}" alt="${retosbd[i].insignea.text}"
                        border="0">
                    </div>
                </div>`;
    }
}

function irPrincipal() {
    mainRetos.style.display = "none";
    mainIndividual.style.display = "none";
    mainHecho.style.display = "none";
    mainPrincipal.style.display = "block";
    document.getElementById("mainCambiarContraseña").style.display="none";
    }

function verRetos() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainRetos.style.display == "none") {
        mainRetos.style.display = "block";
    }
    document.getElementById("mainCambiarContraseña").style.display="none";
}
function verRetoVoluntario(){
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainJuego.style.display == "none") {
        mainJuego.style.display = "block";
    }
    document.getElementById("mainCambiarContraseña").style.display="none";
}


function verRetosTerminados() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainHecho.style.display == "none") {
        mainHecho.style.display = "block";
    }
    document.getElementById("mainCambiarContraseña").style.display="none";
}

function verRetoIndividual(idReto) {
    if (mainRetos.style.display == "block") {
        mainRetos.style.display = "none";
    }
    if (mainIndividual.style.display == "none") {
        mainIndividual.style.display = "block";
    }
    document.getElementById("mainCambiarContraseña").style.display="none";
    
    document.getElementById("retoActual").innerHTML = `<div class="d-flex justify-content-center nomReto">
    <h2>${idReto}</h2>
</div>
<div class="d-flex flex-row descripcion">
    <div class="col-6">
        <h4 class="m-1">${retosbd[idReto -1].text}</h4>
    </div>
    <div class="col-6 d-flex flex-column justify-content-center valorInsignia">
        <div class="d-flex justify-content-center insignia">
            <img src="${retosbd[idReto -1].insignea.img}" alt="${retosbd[idReto -1].insignea.text}"
                border="0" class="mb-5">
        </div>
        <div class="d-flex justify-content-center">
            <h1 class="mt-3">${retosbd[idReto-1].insignea.xp} Punts</h1>
        </div>
    </div>
</div>`
}

function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById("footer").innerHTML = verConsejo;
}

let cambioConsejo = setInterval(footer, 5000);

// alumno insignias
async function insignias() {
    //creamos y cargamos los datos iniciales 
    let arrayi = alumno.insigneas;
    let insignias = [];
    let oro = [];
    let plata = [];
    let bronce = [];
    let countador = [0, 0, 0];
    let ifaltante = ["https://i.ibb.co/ypYzqGf/Medallaorofaltante-removebg-preview.png", "https://i.ibb.co/h161ZS9/Medallaplatafaltante-removebg-preview.png", "https://i.ibb.co/JsbkNT6/Medallabroncefaltante-removebg-preview.png"];
    await fetch("http://localhost:8080/insignia/findall")

        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            insignias = response
        });
        //creamos y cargamos los datos iniciales 
        // asignamos al countador la cantidad de medallas que hay de cada tipo oro-plata-bronce
    for (let index = 0; index < insignias.length; index++) {
        if (insignias[index].xp == 50) {
            countador[0] += 1;
        } else if (insignias[index].xp == 30) {
            countador[1] += 1;
        } else {
            countador[2] += 1;
        }
    }
    // asignamos al countador la cantidad de medallas que hay de cada tipo oro-plata-bronce
    //difrencia las medallas del alumno en cada tipooro-plata-bronce
    for (let index = 0; index < arrayi.length; index++) {
        if (arrayi[index].xp == 50) {
            oro.push(arrayi[index].img);
        } else if (arrayi[index].xp == 30) {
            plata.push(arrayi[index].img);
        } else {
            bronce.push(arrayi[index].img);
        }
    }
    //difrencia las medallas del alumno en cada tipooro-plata-bronce
    //coloca las insignias de los alumnos y agrega insignias con signo de pregunta para rellenar el total de insignias
    for (let index = 0; index < 3; index++) {
        let aux = 0;
        if (index == 0) {
            aux = (countador[index] - oro.length);
        } else if (index == 1) {
            aux = (countador[index] - plata.length);
        } else {
            aux = (countador[index] - bronce.length);
        }
        for (let index2 = 0; index2 < aux; index2++) {
            if (index == 0) {
                oro.push(ifaltante[index]);
            } else if (index == 1) {
                plata.push(ifaltante[index]);
            } else {
                bronce.push(ifaltante[index]);
            }

        }

    }
    //coloca las insignias de los alumnos y agrega insignias con signo de pregunta para rellenar el total de insignias
    //imprime el resultado
    console.log(oro);
    console.log(plata);
    console.log(bronce);
    for (let index = 0; index < 3; index++) {
        let aux = 0;
        if(index == 0){
            aux = oro.length;
        }else if(index == 1){
            aux = plata.length;
        }else{
            aux = bronce.length;
        }
        for (let index2 = 0; index2 < aux; index2++) {
            if(index == 0){
               document.getElementById("oro").innerHTML += `<img src="${oro[index2]}" alt="Medalla" border="0" style="width:220px;" >`;
            }else if(index == 1){
                document.getElementById("plata").innerHTML += `<img src="${oro[index2]}" alt="Medalla" border="0" style="width:220px;">`;
            }else{
                document.getElementById("bronce").innerHTML += `<img src="${bronce[index2]}" alt="Medalla" border="0" style="width:220px;" >`;
            }
            
        }

    }
        //imprime el resultado
}

// cambio de contraseña

async function cambiarContraseña(){
    let id = parseInt(alumno.id);
    let c1 = document.getElementById('cambio1').value;
    let c2 = document.getElementById('cambio2').value;
    if(c1 == c2){
        alert("las contraseñas coinciden");
        if(c1 == alumno.password){
            alert("la contraseña no puede ser igual a la anterior");
        }else{
            const data = JSON.stringify({id:alumno.id , password: c1});
            console.log(data);
            await fetch("http://localhost:8080/alumno/editarContraseña", {
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: data
              }).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then((response) => console.log(response));
        }
    }else{
        alert("las contraseñas no coinciden");
    }
}

function verCambiarContraseña(){
    mainRetos.style.display = "none";
    mainIndividual.style.display = "none";
    mainHecho.style.display = "none";
    mainJuego.style.display = "none";
    mainPrincipal.style.display = "none";
    document.getElementById("mainCambiarContraseña").style.display="block";

}
