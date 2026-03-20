class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    presentarse() {
        return "Hola, soy " + this.nombre + " y trabajo como " + this.cargo;
    }
    calcularSalarioAnual() {
        return this.salario * 12;
    }
    desactivar() {
        this.activo = false;
        return this.nombre + " ha sido desactivado.";
    }
    info() {
        return "Nombre: " + this.nombre + ", Cargo: " + this.cargo + ", Salario: $" + this.salario + ", El usuario está activo?: " + (this.activo ? "Sí" : "No");
    }
}

// Checkpoint

let empleado1 = new Empleado("Marlon", "Desarrollador", 3000000);
let empleado2 = new Empleado("Luis", "Desarrollador Senior", 5000000);
let empleado3 = new Empleado("Lukas", "Gerente de Proyectos", 7000000);

console.log(empleado1.presentarse());
console.log("Salario Anual: $" + empleado1.calcularSalarioAnual());
console.log(empleado1.info());

console.log(empleado2.presentarse());
console.log("Salario Anual: $" + empleado2.calcularSalarioAnual());
console.log(empleado2.info());

console.log(empleado3.presentarse());
console.log("Salario Anual: $" + empleado3.calcularSalarioAnual());
console.log(empleado3.info());

empleado3.desactivar();
console.log(empleado3.info());