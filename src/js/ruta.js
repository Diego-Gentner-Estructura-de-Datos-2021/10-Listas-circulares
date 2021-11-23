export default class Ruta {
    
    // Constructor
    constructor() {
        this._inicio = null;
        this._ultimo = null;
    }

    // Agregar Base
    agregarBase(base) {

        if (this._inicio === null) {
            this._inicio = base;
            this._ultimo = this._inicio;
            this._inicio._siguiente = this._inicio;
            this._inicio._anterior = this._inicio;
            return base;
        } else {

            if (base._nombre === this._ultimo._nombre || base._nombre === this._ultimo._siguiente._nombre) {
                return null;
            }

            this._ultimo._siguiente = base;
            this._ultimo._siguiente._anterior = this._ultimo;
            this._ultimo = this._ultimo._siguiente;
            this._ultimo._siguiente = this._inicio;
            this._inicio._anterior = this._ultimo;
            return base;
        }

    }


    // Eliminar Base
    eliminarBase(base) {

        if (this._inicio === null) {
            console.log('No se puede borrar algo que no existe');
            return null;
        }

        if (this._inicio == this._ultimo) {
            this._inicio = null;
            this._ultimo = null;
            console.log('Borrado el primer y ultimo elemento');
            return base;
        }

        if (this._inicio._siguiente._nombre == this._inicio._nombre || this._inicio._anterior._nombre == this._inicio._nombre) {
            this._inicio = null;
            this._ultimo = null;
            console.log('Borrado satisfactoriamente');
            return new Ruta();
        }

        this._eliminarPorBusqueda(base);

    }

    // Eliminar por busqueda
    _eliminarPorBusqueda(elementoBorrar) {

        let elim=null;

        if (elementoBorrar._nombre == this._inicio._nombre){
            elim = this._inicio;
            this._inicio=this._inicio._siguiente;
            this._inicio._anterior=this._ultimo;
            this._ultimo._siguiente = this._inicio;
            elim._siguiente=null;
            console.log('Borrado satisfactoriamente');
            return elim;
        }

        let temp = this._inicio;
        let temp2;

        while(temp._siguiente != this._inicio){
          if (temp._siguiente._nombre == elementoBorrar._nombre) {
            elim=temp._siguiente;
            temp._siguiente=temp._siguiente._siguiente;
            temp._siguiente._anterior = temp;
            elim._siguiente=null;
            this._ultimo = this._inicio._anterior;
            console.log('Borrado satisfactoriamente');
            console.log(elim);
            temp2 = elim;
            return temp2;
          } else {
            temp=temp._siguiente;
          }
        }
        return null;
    }


    // Listar
    listar() {
        console.log(this._inicio);
        return this._inicio;
    }

    // Listar Inverso
    listarInverso() {
        return this._ultimo;
    }

    crearTarjeta(base, hora, minutos) {
        const answer = new Array;
        if (this._inicio._nombre == this._ultimo._nombre) {
            return null;
        }
        if (this._inicio != null) {
            console.log(Number(hora.substr(0,2)));
            console.log(Number(hora.substr(3,5)));

            let temp = this._inicio;

            while (base != temp._nombre) {
                temp = temp._siguiente;
            }
    
            let date = new Date(2000, 0, 1, Number(hora.substr(0,2)), Number(hora.substr(3,5)));
            let timer = Number(minutos);
    
            console.log(`La ruta saldrá de ${temp._nombre} a las ${this.timeFormatted(date.getHours(), date.getMinutes())}`);
            answer.push(`La ruta saldrá de ${temp._nombre} a las ${this.timeFormatted(date.getHours(), date.getMinutes())}`)

            do {

                if (timer < temp._siguiente._minutos) {
                    break;
                }

                date.setTime(date.getTime() + (temp._siguiente._minutos * 60000));

                console.log(`La ruta llegará a ${temp._siguiente._nombre} a las ${this.timeFormatted(date.getHours(), date.getMinutes())}`);
                answer.push(`La ruta llegará a ${temp._siguiente._nombre} a las ${this.timeFormatted(date.getHours(), date.getMinutes())}`)

                timer -= temp._siguiente._minutos;
                
                temp = temp._siguiente;
            } while (timer > 0);
        } else {
            return null;
        }
        return answer;
    }

    timeFormatted(hours, minutes) {

        console.log(hours);
        console.log(minutes);

        let hora = hours.toString();
        let minutos = minutes.toString();
        if (hora.length == 1) {
            hora = `0${hora}`
        }
        if (minutos.length == 1) {
            minutos = `0${minutos}`
        }
        return `${hora}:${minutos}`
    }

}