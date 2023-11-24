let array = [];

function Empleado(legajo, nombre, apellido, fechaNac, cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.cargo = cargo;
}

function obtenerDatos() {
    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNac = document.getElementById("fechaNacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(legajo, nombre, apellido, fechaNac, cargo);
    array.push(empleado);

    alert("Empleado agregado correctamente");
}

function mostrarEmpleados() {
    let resultado = "";
    let contador = 1;
    for(let empleado of array) {
        resultado += `\n *** Empleado número: ${contador} *** \n`;
        for(let dato in empleado) {
            /*Construir la cadena*/
            resultado += "\n" + `${dato}: ${empleado[dato]}` + "\n";
        }
        contador++;
    }
    /*Devolver la cadena completa */
    alert(resultado);
}