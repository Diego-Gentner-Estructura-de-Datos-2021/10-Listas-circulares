export default class Ruta {

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

        if (this._inicio._siguiente._nombre == this._inicio._nombre || this._inicio._anterior._nombre == this._inicio._nombre) {
            this._inicio = null;
            this._ultimo = null;
            return;
        }

        this._eliminarPorBusqueda(base);

    } // Eliminar Base

    _eliminarPorBusqueda(elementoBorrar) {

        let elim=null;

        if (elementoBorrar._nombre == this._inicio._nombre){
            elim = this._inicio;
            this._inicio=this._inicio._siguiente;
            this._inicio._anterior=this._ultimo;
            this._ultimo._siguiente = this._inicio;
            elim._siguiente=null;
            return elim;
          }

        let temp = this._inicio;

        while(temp._siguiente != this._inicio){
            console.log('H')
          if (temp._siguiente._nombre == elementoBorrar._nombre) {
            elim=temp._siguiente;
            temp._siguiente=temp._siguiente._siguiente;
            temp._siguiente._anterior = temp;
            elim._siguiente=null;
            this._ultimo = this._inicio._anterior;
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