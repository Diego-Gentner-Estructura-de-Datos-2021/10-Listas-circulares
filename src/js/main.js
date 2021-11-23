import Base from './base.js';
import Ruta from './ruta.js'
import UpdatePage from './updatePage.js'

// Establecer nueva lista circular y actualizar html
let rutaCircular = new Ruta();
let actualizar = new UpdatePage();

const list = () => {
    actualizar.html(rutaCircular.listar(), false);
}

const listInvert = () => {
    actualizar.html(rutaCircular.listar(), true);
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
        Swal.fire('Error','La misma base no puede agregarse de manera consecutiva. ErrorCode: CONSECUTIVE_OR_START_FINAL_SAME','error');
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

const createCard = () => {

    let baseName = (document.getElementById('selectRuta').value);
    let hour = (document.getElementById('horaSalida').value);
    let minutes = (document.getElementById('minutosCirculacion'));

    if (minutes.value > 2880) {
        minutes.value = 2880;
        minutes = minutes.value;
        Swal.fire('Advertencia','Para proteger la integridad de tu dispositivo, se ha limitado a 2880 minutos (48 horas).','warning');
    } else {
        minutes = minutes = minutes.value;
    }

    if (baseName == "" || baseName == "null" || baseName == " " || baseName == null) {
        Swal.fire('Espera','Debes llenar todos los campos.','warning');
        return null;
    }

    if (rutaCircular.crearTarjeta(baseName, hour, minutes) === null) {
        Swal.fire('Operación fallida','Debes tener 2 o más bases agregadas.','info');
    }
    

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

// Eventos de funcion para btn de Remover Ruta
let btnAddCard = document.querySelector('#createCard');
btnAddCard.addEventListener('click', createCard);