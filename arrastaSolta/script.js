
/**
document.querySelector('.neutralArea').addEventListener('click', (e) => {
    console.log(" Target ", e.target);
    console.log("Current Target ", e.currentTarget);
    //e.target.style.border = '1px solid #ff0000';
    //target mostra exatamente qual o elemento que foi clicado
    //currentTarget mostra quem tem o evento
});
*/

/** 
 * Quando começa a arrastar o elemento que contém o atributo 'draggable' o 
 * cursor fica de outra forma, neste caso com o símbolo de proíbido 
 */

//querySelectorAll para pegar todos os elementos desta classe
document.querySelectorAll('.item').forEach( item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
    //cada um dos itens receberá dois eventos
});
//dragstart - evento que começa quando se começa a arrastar o elemento
//dragend - evento quando se solta o mouse


//tratar a área que  receberá os elementos, terá pelo menos 3 eventos diferentes 
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
//dragover - arrastando item e passar por cima da area do evento - neste caso a '.area'
//dragleave - quando esta em uma area que pode soltar o elemento e sai dela 
//drop - solta o item no local
//ha outros , mas estes  são os principais


//agora transformar o 'neutralArea' em uma zona de descarga também
document.querySelector('.neutralArea').addEventListener( 'dragover', dragOverNeutral );
document.querySelector('.neutralArea').addEventListener( 'dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener( 'drop', dropNeutral);


/**Functions Item */
//class dragging - deixa a cor do elemento opaca
function dragStart(e){
    e.currentTarget.classList.add('dragging');

}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}


/**Function Area */
function dragOver(e){
    //quando o mouse esta passando com a imagem por cima da '.area'
    //console.log("Passou por cima ");

    if( e.currentTarget.querySelector('.item') === null){
        //liberar para descarga 
        e.preventDefault();
        //comportamento padrão  é NEGAR o drop - preventDefault para o comportamento padrão, 
        //portanto libera o drop
        //quando arrasta para a área de descarga e o descarregamento esta liberado 
        // o ícone do mouse fica com o simbolo de '+'

        //mudando o fundo das áreas que podem receber descarga do elemento 
        e.currentTarget.classList.add('hover');
    }

    
}

function dragLeave(e){
    // ao sair de uma área onde pode soltar o elemento
    //console.log(" Saindo da área de descarregar ");

    e.currentTarget.classList.remove('hover');

}

function drop(e){
    //drop só funciona se o dragover libera para descarregar
   // console.log("Liberou ");

   //remover a class hover para a area voltar ao normal
    e.currentTarget.classList.remove('hover');

    //soltar o elemento na área selecionada


   //verificar se na área ja esta ocupada 
   if( e.currentTarget.querySelector('.item') === null){
        //se dentro do currentTarget não houver a classe Item( sem conteudo )

              
        //primeiro identificar quem é o item que esta sendo seelcionado
        let dragItem = document.querySelector('.item.dragging');
        // console.log(dragItem);
       
       
       
       

       //remover da área de cima e adicionar na area de baixo 
       e.currentTarget.appendChild( dragItem );
       //adicione um item no final ( dentro)
       // um item nao pode estar em dois lugares ao mesmo tempo
       // portanto ele pode retirar de um lugar e add em outro 

   }

}

/**Funcoes para transformar a neutralArea em zona de descarga também */
function dragOverNeutral(){

}

function dragLeaveNeutral(){

}

function dropNeutral(){
    
}