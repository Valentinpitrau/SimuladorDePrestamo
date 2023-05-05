//Array de registro 
let listaClientes = [
    {nombre: "Mario", edad: 32, email:"mariobena@gmail.com"},
];

//constructor
class Persona{
    constructor(nombre, edad, email){
        this.nombre = nombre;
        this.edad = edad;
        this.emali = email;
    }
}

//Agregar cliente al array
const agregarCliente = () => {
        let nombre = document.getElementById("nombre").value;
        let edad = document.getElementById ("edad").value;
        let email = document.getElementById ("email").value;

        let personaNueva = new Persona(nombre, edad, email);
        listaClientes.push(personaNueva);
        console.log(personaNueva);
}

const form = document.querySelector("#formulario");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarCliente();
    Swal.fire({
        title: "Gracias!",
        text: "Ha completado el registro exitosamente.",
        icon: "success",
        confirmButtonText: "OK"
    });
} )