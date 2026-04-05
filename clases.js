export class Cerradura {  //he exportado clase base con propiedad estatica privada y una propiedad privada de instancia
    static #total = 0;
    #fallos = 0;

    constructor(id) {
        this.id = id;
        Cerradura.#total++;
    }

    static getTotal() {
        return Cerradura.#total;
    }

    añadirFallo() {
        this.#fallos++;
    }

    getFallos() {
        return this.#fallos;
    }

    info() {
        return "cerradura id: " + this.id;
    }
}

export class CerraduraDigital extends Cerradura {
    #codigo;

    constructor(id, codigo) {
        super(id);
        this.#codigo = codigo;
    }

    abrir(intento) {
        if (intento === this.#codigo) {
            return true;
        }
        this.añadirFallo();
        return false;
    }
}