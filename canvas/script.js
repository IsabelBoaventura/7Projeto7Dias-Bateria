

/*** dados iniciais = Initial Data **/
//trocar de cores
//armazenar qual a cor que esta selecionada 
let currentColor = 'black';

//selecionar o canvas
let screen = document.querySelector('#tela');
//pegar  o contexto do canvas
//duvidas rever a aula da Alura de Canvas
let ctx = screen.getContext('2d');


/*** events **/
//pega todos as cores por loop e poem  o evento quando selecionada 
document.querySelectorAll('.colorArea .color').forEach( item =>{
    //quando passa em cada um dos itens(cores) se clica faz a funcao 
    item.addEventListener( 'click' , colorClickEvent );
});

/**
 * Regra para o jogo
 * Passo a passo para desenhar no Canvas 
 *  - Quando o click  do mouse ABAIXAR, ative o modo desenho
 *  - Quando o mouce se MOVER, se o modo desenho estiver ativo, desenhe.
 *  - Quando o click do mouse LEVANTAR , desative o modo desenho.
 * [em 17 minutos de video ]
 */



/***  funcoes - processos  **/ 
function  colorClickEvent(e){
    //verifica qual a cor que foi clicada 
    let color = e.target.getAttribute('data-color');
    //console.log( color );

    //armazenar a cor,  e trocar  active 
    currentColor = color; // cor armazenada
    //para trocar a classe ative ,  primeiro tem que descobir quem tem ele 
    //depois tem de remover 
    document.querySelector('.color.active').classList.remove('active');

    //agora adicionar a classe ative em quem foi clicado
    e.target.classList.add('active');


}
