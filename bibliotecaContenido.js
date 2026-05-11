class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return this.titulo + ", " + this.genero + " (" + this.anio + ")";
    }

    retirar() {
        this.disponible = false;
        return this.titulo + " ha sido retirado.";
    }

    estado() {
        return this.disponible ? "Disponible" : "Retirado";
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return horas + "h " + minutos + "min";
    }

    ficha() {
        return super.ficha() + " - Duración: " + this.duracionFormateada();
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return super.ficha() + " - Temporadas: " + this.temporadas + " - Total caps: " + this.totalEpisodios();
    }
}

let p1 = new Pelicula("Inception", "Sci-Fi", 2010, 148);
let p2 = new Pelicula("The Matrix", "Acción", 1999, 136);
let p3 = new Pelicula("Toy Story", "Animación", 1995, 81);

let s1 = new Serie("Breaking Bad", "Drama", 2008, 5);
s1.registrarEpisodios(13);
let s2 = new Serie("Friends", "Comedia", 1994, 10);
s2.registrarEpisodios(22);
let s3 = new Serie("The Bear", "Drama", 2022, 3);
s3.registrarEpisodios(10);

let catalogo = [p1, p2, p3, s1, s2, s3];

for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}

console.log(p2.retirar());
console.log(s2.retirar());

console.log(p2.titulo + ": " + p2.estado());
console.log(s2.titulo + ": " + s2.estado());

let disponibles = 0;
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible === true) {
        disponibles++;
    }
}

console.log("Total disponibles: " + disponibles);