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
    success();
}

const removeBase = () => {

    // let baseName = document.querySelector('#selectBase').value;
    console.log(document.getElementById('#selectRuta').value);

    // console.log(baseName);


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

// SweetAlert
function success() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Guardado'
      })
}


// let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
// let jardinDeNinos = new Base('Gabriela Mistral', 85);
// let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);




// actualizar.updateRutaSelect(jardinDeNinos);
// actualizar.removeRutaSelect(campoUniversitario);
