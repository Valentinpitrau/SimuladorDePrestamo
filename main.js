const montoPrestamo = document.querySelector("#montoPrestamo");
const cantidadCuotas = document.querySelector("#cantidadCuotas");
const errorPrestamo = document.querySelector("#errorPrestamo");
const errorCuotas = document.querySelector("#errorCuotas");
const resultadoPrestamo = document.querySelector("#mostrarResultado");
const calcular = document.querySelector("#calcular");
const calcularOtro = document.querySelector("#calcularOtro")


calcular.addEventListener("click", () => {
            let monto = montoPrestamo.value;
                if(monto == ""){
                    Swal.fire({
                        title: "Error",
                        text: "Debe completar todos los cuadros",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                }
                else{
                    console.log(monto)
                }

            let numeroCuotas = cantidadCuotas.value;
                if((numeroCuotas == 12)||(numeroCuotas == 24) || (numeroCuotas == 48) || (numeroCuotas == 56)){
                    console.log(numeroCuotas)
                }
                else{
                    Swal.fire({
                        title: "Error",
                        text: "Numero de cuotas invalido",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                }

            let resultado = monto / numeroCuotas
                if( (montoPrestamo == "") || (numeroCuotas == "")){
                    Swal.fire({
                        title: "Error",
                        text: "Debe completar todos los cuadros",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                }
                else{
                    Swal.fire({
                        title: "Exito!",
                        text: `Para un prestamo de ${monto} en ${numeroCuotas} cuotas, el monto de la misma sera de $ ${resultado}`,
                        icon: "success",
                        confirmButtonText: "Gracias"
                    });
                    console.log(resultado)
                }
        });
