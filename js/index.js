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
  destreza;
  constructor(nombre, familia, edad, armaDefinir) {
    super(nombre, familia, edad);
    this.arma = armaDefinir;
  }
  set setterDestreza(destrezaDefinir) {
    if (destrezaDefinir > 0 && destrezaDefinir <= 10) {
      this.destreza = destrezaDefinir;
    } else if (destrezaDefinir < 0) {
      this.destreza = 0;
    } else if (destrezaDefinir > 10) {
      this.destreza = 10;
    }
  }

  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto"`;
  }
}

