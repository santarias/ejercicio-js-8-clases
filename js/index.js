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
  constructor(nombre, familia, edad, armaDefinir, destrezaDefinir) {
    super(nombre, familia, edad);
    this.arma = armaDefinir;
    this.verificarDestreza(destrezaDefinir);
  }
  set setterDestreza(destrezaDefinir) {
    this.verificarDestreza(destrezaDefinir);
  }

  verificarDestreza(destrezaVerificar) {
    if (destrezaVerificar > 0 && destrezaVerificar <= 10) {
      this.destreza = destrezaVerificar;
    } else if (destrezaVerificar < 0) {
      this.destreza = 0;
    } else if (destrezaVerificar > 10) {
      this.destreza = 10;
    }
  }



  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto"`;
  }
}
class Escudero extends Personaje {
  personajeQueSirve;
  pelotismo;
  constructor(nombre, familia, edad, personajeServir) {
    super(nombre, familia, edad);
    this.verificarPersonajeServir(personajeServir);
  }
  set personajeAServir(personajeDefinir) {
    this.verificarPersonajeServir(personajeDefinir);
  }
  set gradoPelotismo(pelotismoVerificar) {
    this.veriricarPelotismo(pelotismoVerificar);
  }

  verificarPersonajeServir(personaje) {
    if (personaje instanceof Luchador) {
      this.personajeQueSirve = personaje;
    }
  }

  veriricarPelotismo(pelotismoDefinir) {
    if (pelotismoDefinir > 0 && pelotismoDefinir <= 10) {
      this.pelotismo = pelotismoDefinir;
    } else {
      this.pelotismo = 0;
    }
  }
  comunicar() {
    return `${super.comunicar()} "Soy un loser"`;
  }
}

