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
        Swal.fire('Error','No hay nada escrito','error')
        return;
    }

    let nuevaBase = new Base(baseName, baseMinutes);
    rutaCircular.agregarBase(nuevaBase);
    actualizar.updateRutaSelect(nuevaBase);
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





// let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
// let jardinDeNinos = new Base('Gabriela Mistral', 85);
// let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);
// actualizar.updateRutaSelect(jardinDeNinos);
// actualizar.removeRutaSelect(campoUniversitario);
