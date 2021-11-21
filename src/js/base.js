export default class Base {

    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = Number(minutos);
        this._siguiente = null;
        this._anterior = null;
    }

    info() {
        return `Nombre: ${this._nombre} Minutos: ${this._minutos}`
    }

}