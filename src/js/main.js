import Base from './base.js';
import Ruta from './ruta.js'
import UpdatePage from './updatePage.js'

const list = () => {
    actualizar.html(ruta4.listar()); 
}

const listInvert = () => {
    actualizar.htmlInverso(ruta4.listar()); 

}

let inverso = false;

let actualizar = new UpdatePage();

let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
let jardinDeNinos = new Base('Gabriela Mistral', 85);
let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);

let ruta4 = new Ruta();
ruta4.agregarBase(campoUniversitario);
actualizar.updateRutaSelect(campoUniversitario);
ruta4.agregarBase(jardinDeNinos);
actualizar.updateRutaSelect(jardinDeNinos);
ruta4.agregarBase(centroDeTerapias);
actualizar.updateRutaSelect(centroDeTerapias);
ruta4.eliminarBase(campoUniversitario);
actualizar.removeRutaSelect(campoUniversitario);
// ruta4.eliminarBase(centroDeTerapias);
// ruta4.eliminarBase(jardinDeNinos);
actualizar.html(ruta4.listar());

let btnList = document.querySelector('#btnList');
let btnListInvert = document.querySelector('#btnListInvert');
btnList.addEventListener('click', list);
btnListInvert.addEventListener('click', listInvert);


