class Personaje {
  nombre;
  familia;
  edad;
  estado;
  serie;

  constructor(nombreDefinir, familiaDefinir, edadDefinir) {
    this.nombre = nombreDefinir;
    this.familia = familiaDefinir;
    this.edad = edadDefinir;
    this.estado = "vivo";
    this.serie = "Juego de Tronos";
  }

  morir() {
    this.estado = "muerto";
  }

  comunicar() {
    return `${this.nombre} dice:`;
  }

}

class Rey extends Personaje {
  anyosReinado;
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.anyosReinado = reinado;
  }

  comunicar() {
    return `${super.comunicar()} "Vais a Morir Todos"`;
  }
}

class Luchador extends Personaje {
  arma;
  constructor(nombre, familia, edad, armaDefinir) {
    super(nombre, familia, edad);
    this.arma = armaDefinir;
  }

  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto"`;
  }
}

class Arma {
  nombre;
  destreza;
  constructor(nombreDefinir) {
    this.nombre = nombreDefinir;
  }
  set destreza(destrezaDefinir) {
    this.destreza = destrezaDefinir;
  }
}
