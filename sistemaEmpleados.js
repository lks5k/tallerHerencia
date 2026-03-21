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

class lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, "Líder de Equipo", salario);
        this.equipo = equipo
    }
    presentarEquipo() {
        return "Los integrantes de nuestro equipo son: " + this.equipo.join(", ");
    }
    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return nombre + " ha sido agregado al equipo de trabajo.";
    }
    info() {
        return super.info() + ", el total de colaboradores en el equipo: " + this.equipo.length;
    }
}

// Checkpoint

let liderVentas = new lider("Mariano", 6000000, ["Marlon", "Luis", "Lukas"]);
let liderProduccion = new lider("Lucia", 6500000, ["María", "José"]);

console.log("salario anual de Marlon: $" + empleado1.calcularSalarioAnual());
console.log(liderVentas.desactivar());
console.log("El estado de Mariano es: " + (liderVentas.activo ? "Acticvo" : "Desactivado"));

console.log(liderProduccion.agregarMiembro("Juan"));

console.log(liderVentas.presentarEquipo());

let empleado4 = new Empleado("Felipe", "Desarrollador", 3000000);
let empleado5 = new Empleado("Sofia", "Desarrolladora", 3000000);
let empleado6 = new Empleado("Andres", "Desarrollador", 3000000);
let empleado7 = new Empleado("Camila", "Desarrolladora", 3000000);

let liderTecnologia = new lider("Valentina", 7000000, ["Daniela", "Mario"]);
let liderCompras = new lider("Santiago", 6500000, ["Laura", "Diego"]);

