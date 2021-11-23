import Base from './base.js';
import Ruta from './ruta.js'
import UpdatePage from './updatePage.js'

// Establecer nueva lista circular y actualizar html
let rutaCircular = new Ruta();
let actualizar = new UpdatePage();

const list = () => {
    actualizar.html(rutaCircular.listar());
}

const listInvert = () => {
    actualizar.htmlInverso(rutaCircular.listar());
}

const addBase = () => {
    let baseName = document.querySelector('#baseName').value;
    let baseMinutes = document.querySelector('#baseMinutes').value;

    if (baseName == "" || baseMinutes == "" || baseName == " " || baseMinutes == " ") {
        Swal.fire('Espera','Aun no estan escritos todos los campos.','warning')
        return null;
    }

    let nuevaBase = new Base(baseName, baseMinutes);

    if (rutaCircular.agregarBase(nuevaBase) === null) {
        Swal.fire('Error','La primera y ultima base no pueden ser iguales. ErrorCode: START_FINAL_SAME','error');
        throw new Error('START_FINAL_SAME');
    }

    actualizar.updateRutaSelect(nuevaBase);
    list();
    actualizar.success();
}

const removeBase = () => {
    let baseName = (document.getElementById('selectRuta').value);
    let temp = new Base(baseName, null);

    if (baseName == "" || baseName == "null" || baseName == " " || baseName == null) {
        Swal.fire('Espera','Debes seleccionar un valor de la lista.','warning')
        return null;
    }

    let temp2 = rutaCircular.eliminarBase(temp);

    if (temp2 === null || temp2 == "null") {
        Swal.fire('Error','No se puede borrar algo eliminado/inexistente. ErrorCode: DELETE_NOT_FIND','error');
        throw new Error('DELETE_NOT_FIND');
    } else {
        Swal.fire('Eliminado', `<b>Se ha borrado:</b> ${temp._nombre}`, 'success')
    }

    actualizar.removeRutaSelect(temp);
    list();
}

// Eventos de funcion para btn de Listar
let btnList = document.querySelector('#btnList');
btnList.addEventListener('click', list);

// Eventos de funcion para btn de Listar Inverso
let btnListInvert = document.querySelector('#btnListInvert');
btnListInvert.addEventListener('click', listInvert);

// Eventos de funcion para btn de Agregar Ruta
let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', addBase);

// Eventos de funcion para btn de Remover Ruta
let btnRemove = document.querySelector('#deleteBase');
btnRemove.addEventListener('click', removeBase);