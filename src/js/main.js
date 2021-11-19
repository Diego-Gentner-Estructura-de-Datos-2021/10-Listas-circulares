class Base {

    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = Number(minutos);
        this._siguiente = null;
        this._anterior = null;
    }

}


class Ruta {

    constructor() {
        this._inicio = null;
        this._ultimo = null;
    } // Constructor

    agregarBase(base) {

        if (this._inicio === null) {
            this._inicio = base;
            this._ultimo = this._inicio;
            this._inicio._siguiente = this._inicio;
            this._inicio._anterior = this._inicio;
        } else {
            this._ultimo._siguiente = base;
            this._ultimo._siguiente._anterior = this._ultimo;
            this._ultimo = this._ultimo._siguiente;
            this._ultimo._siguiente = this._inicio;
            this._inicio._anterior = this._ultimo;    
        }

    } // Agregar Base

    eliminarBase(base) {

        if (this._inicio === null) {
            Swal.fire('Error', 'No puedes borrar algo que no existe.', 'error');
        }

    } // Eliminar Base

    listar() {
        console.log(this._inicio);
    } // Listar

    listarInverso() {
        console.log(this._ultimo);
    } // Listar Inverso


}

let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
let jardinDeNinos = new Base('Gabriela Mistral', 85);
let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);


let ruta4 = new Ruta();
ruta4.eliminarBase(centroDeTerapias);
ruta4.agregarBase(campoUniversitario);
ruta4.agregarBase(jardinDeNinos);
ruta4.agregarBase(centroDeTerapias);
ruta4.listar()




