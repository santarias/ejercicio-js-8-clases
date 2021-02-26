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

class Asesor extends Personaje {
  personajeAsesorado;
  constructor(nombre, familia, edad, asesorado) {
    super(nombre, familia, edad);
    this.verificarAsesorado(asesorado);
  }
  set personajeAsesor(personajeDefinir) {
    this.verificarAsesorado(personajeDefinir);
  }

  verificarAsesorado(personaje) {
    if (personaje instanceof Luchador) {
      this.personajeAsesorado = personaje;
    }
    if (personaje instanceof Rey) {
      this.personajeAsesorado = personaje;
    }
    if (personaje instanceof Escudero) {
      this.personajeAsesorado = personaje;
    }
  }


  comunicar() {
    return `${super.comunicar()} "No se por que, pero creo que voy a morir pronto"`;
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
