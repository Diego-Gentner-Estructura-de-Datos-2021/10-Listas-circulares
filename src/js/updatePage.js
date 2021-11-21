export default class UpdatePage {

    html(lista) {

        let array = this.getProductsList(lista);
        
        // this.deleteProductList();
        console.log(array)
        let block_to_insert;
        let container_block;
         
        array.forEach(element => {
                block_to_insert = document.createElement( 'div' );
                block_to_insert.classList.add("productsIndex");
                block_to_insert.innerHTML = `${element.info()}`;
                 
                container_block = document.getElementById('listaHtml');

                container_block.appendChild(block_to_insert);

        });
    }

    getProductsList(lista) {
        let list = [];
        let current = lista;
        
        do {
            list.push(current);
            current = current._siguiente;
        } while (current._nombre != lista._nombre);
        return list;
    }

    // lista._siguiente._nombre != lista._nombre

}