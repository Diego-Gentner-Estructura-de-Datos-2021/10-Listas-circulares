import Base from './base.js';
import Ruta from './ruta.js'

let campoUniversitario = new Base('Campo Olimpico Universitario', 85);
let jardinDeNinos = new Base('Gabriela Mistral', 85);
let centroDeTerapias = new Base('Centro de Terapias de la Conducta', 85);

let ruta4 = new Ruta();
ruta4.agregarBase(campoUniversitario);
ruta4.agregarBase(jardinDeNinos);
ruta4.agregarBase(centroDeTerapias);
ruta4.eliminarBase(campoUniversitario);
ruta4.eliminarBase(centroDeTerapias);
ruta4.eliminarBase(jardinDeNinos);
ruta4.listar();
ruta4.listarInverso();