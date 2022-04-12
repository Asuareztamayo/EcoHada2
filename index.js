let email;
let entrar2;
let id = 1;

    async function acceder (){
    email = document.getElementById("email").value;
    entrar2 = document.getElementById("entrar2").value;
    let a = email.substring(0,6);
    let r;
    if("alumno" == a){
        await fetch(`http://localhost:8080/alumno/iniciarSesion?email=${email}&&password=${entrar2}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then( response => { 
                r = response;});
            if(r > 0){
            sessionStorage.setItem("id", r);
            window.location.assign("vistasAlumno/alumno.html");
            }
            

        }else{
            await fetch(`http://localhost:8080/profesor/iniciarSesion?email=${email}&&password=${entrar2}`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then( response => { 
                    r = response;});
                if(r > 0){
                sessionStorage.setItem("id", r);
                window.location.assign("vistasProfe/principalProfe.html");
                }
        }
}