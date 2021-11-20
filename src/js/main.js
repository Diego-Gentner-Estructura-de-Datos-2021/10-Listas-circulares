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
            return base;
        } else {
            this._ultimo._siguiente = base;
            this._ultimo._siguiente._anterior = this._ultimo;
            this._ultimo = this._ultimo._siguiente;
            this._ultimo._siguiente = this._inicio;
            this._inicio._anterior = this._ultimo;
            return base;
        }

    } // Agregar Base

    eliminarBase(base) {

        if (this._inicio === null) {
            console.log('No se puede borrar algo que no existe');
            return null;
        }

        if (this._inicio == this._ultimo) {
            this._inicio = null;
            this._ultimo = null;
            console.log('Borrado el primer y ultimo elemento')
            return base;
        }

        if (this._inicio._siguiente) {
            
        }

        this._eliminarPorBusqueda(base);

    } // Eliminar Base

    _eliminarPorBusqueda(elementoBorrar) {

        let elim=null;
        let temp=this._inicio;

        if (elementoBorrar._nombre == this._inicio._nombre){
            elim = this._inicio;
            this._inicio=this._inicio._siguiente;
            this._inicio._anterior=this._ultimo;
            this._ultimo._siguiente = this._inicio;
            elim._siguiente=null;
            return elim;
          }

        while(temp._siguiente != this._inicio){
    
          if (temp._siguiente._nombre == elementoBorrar._nombre) {
            elim=temp._siguiente;
            temp._siguiente=temp._siguiente._siguiente;
            temp._siguiente._anterior = temp;
            elim._siguiente=null;
            return elim;
          } else {
            temp=temp._siguiente;
          }
        }
        return elim;
    }

    listar() {
        console.log(this._inicio);
    } // Listar

    listarInverso() {
        console.log(this._ultimo);
    } // Listar Inverso

    buscarBase(base) {
        let temp = this._inicio;

        if (base._nombre == temp._nombre) {
            return temp;
        } else {
            if (temp == this._ultimo) {
                return null;
            } else {
                temp = temp._siguiente;
                this.buscarBase(base);
            }
        }
    }


}

let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
let jardinDeNinos = new Base('Gabriela Mistral', 85);
let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);

let ruta4 = new Ruta();
ruta4.agregarBase(campoUniversitario);
ruta4.agregarBase(jardinDeNinos);
ruta4.agregarBase(centroDeTerapias);
ruta4.eliminarBase(campoUniversitario);
ruta4.eliminarBase(centroDeTerapias);
// ruta4.eliminarBase(jardinDeNinos);
ruta4.listar();