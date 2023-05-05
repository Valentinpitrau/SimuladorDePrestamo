
//login
const formularioUsuario = document.querySelector("#formularioUsuario");
const nombreFormulario = document.querySelector("#nombre");
const passwordFormulario = document.querySelector("#password");
const saludoUsuario = document.querySelector("#saludoUsuario");
const logout = document.querySelector("#logout");


//variables
let nombre;
let password;

let nombreStorage = localStorage.getItem("nombre");
let passwordSorage = localStorage.getItem("password");


//listener
formularioUsuario.addEventListener ( `submit`, (e) => {
    e.preventDefault();
    ejecutarFormulario();
});


//saludar
const imprimirSaludo = () => {
    Swal.fire({
        title: `Bienvenido/a ${nombre}`,
        text: "Esperamos que este sitio te sea de utilidad",
        icon: "success",
        confirmButtonText: "Gracias"

    });
    formularioUsuario.style.display = `none`
}

const revertirSaludo = () => {
    saludoUsuario.innerHTML = "";
    formularioUsuario.style.display = `block`;
}


//ejecutar formulario y guardar en el storage
const ejecutarFormulario = async () => {

    let listaUsuarios = await fetch("../listaUsuarios.json")
    .then(response => response.json())

    let userFind = listaUsuarios.find( e => e.nombreUsuario === nombreFormulario.value)
    if(userFind === undefined) {
        Swal.fire({
            title: `Error`,
            text: "Usuario no encontrado",
            icon: "error",
            confirmButtonText: "OK"
    
        });
    } else {
        if(userFind.password != passwordFormulario.value) {
            Swal.fire({
                title: `Error`,
                text: "Contraseña incorrecta",
                icon: "error",
                confirmButtonText: "OK"
        
            });
        } else {
            localStorage.setItem('nombre', `${userFind.nombreUsuario}`)
            imprimirSaludo();
        }
    }
}


//verificar storage
const verificarStorage = () => {
    if(nombreStorage !== null && passwordSorage !== null){
        nombre = nombreStorage;
        password = passwordSorage;
    } else{
        formularioUsuario.addEventListener("submit", (e)=>{
            e.preventDefault();
            ejecutarFormulario();
        });
    }
}


//logout
const cerrarSesion = () => {
    localStorage.removeItem ("nombre");
    localStorage.removeItem ("password");

    revertirSaludo();
}

logout.addEventListener ("click", () => {
    cerrarSesion();
});