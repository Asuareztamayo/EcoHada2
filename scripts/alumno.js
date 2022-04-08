let alumno;
let retosbd;
let idReto = document.getElementById("idReto");
let home = document.getElementById("home");
let mainPrincipal = document.getElementById("principalAlumno");
let mainRetos = document.getElementById("mainRetosActuales");
let mainIndividual = document.getElementById("mainRetoIndividual");
let mainHecho = document.getElementById("mainRetosHechos");
let irRetos = document.getElementById("retosActuales");
let irTerminados = document.getElementById("retosCompletos");
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
irTerminados.addEventListener("click", () => {
    verRetosTerminados();
});
// retoIndividual.addEventListener("click", () => {
// //  verRetoIndividual();
// });

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
    if (mainRetos.style.display == "block") {
        mainRetos.style.display = "none";
    }
    if (mainIndividual.style.display == "block") {
        mainIndividual.style.display = "none";
    }
    if (mainHecho.style.display == "block") {
        mainHecho.style.display = "none";
    }
    if (mainPrincipal.style.display == "none") {
        mainPrincipal.style.display = "block";
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


function verRetosTerminados() {
    if (mainPrincipal.style.display == "block") {
        mainPrincipal.style.display = "none";
    }
    if (mainHecho.style.display == "none") {
        mainHecho.style.display = "block";
    }
}

function verRetoIndividual(idReto) {
    if (mainRetos.style.display == "block") {
        mainRetos.style.display = "none";
    }
    if (mainIndividual.style.display == "none") {
        mainIndividual.style.display = "block";
    }
    console.log(idReto)
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
    let arrayi = alumno.insigneas;
    let insignias = [];
    let oro = [];
    let plata = [];
    let bronce = [];
    let countador = [0, 0, 0];
    let ifaltante = ["https://ibb.co/r3cBHT7", "https://ibb.co/x8k8fNL", "https://ibb.co/W2dKQX8"];
    await fetch("http://localhost:8080/insignia/findall")

        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            insignias = response
        });
    for (let index = 0; index < insignias.length; index++) {
        if (insignias[index].xp == 50) {
            countador[0] += 1;
        } else if (insignias[index].xp == 30) {
            countador[1] += 1;
        } else {
            countador[2] += 1;
        }
    }
    console.log(countador);
    console.log(bronce);
    for (let index = 0; index < arrayi.length; index++) {
        if (arrayi[index].xp == 50) {
            oro.push(arrayi[index].img);
        } else if (arrayi[index].xp == 30) {
            plata.push(arrayi[index].img);
        } else {
            bronce.push(arrayi[index].img);
        }

    }
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
    console.log(oro);
    console.log(plata);
    console.log(bronce);
}
