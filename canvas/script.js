/*** dados iniciais = Initial Data **/
//trocar de cores
//armazenar qual a cor que esta selecionada 
let currentColor = 'black';

//selecionar o canvas
let screen = document.querySelector('#tela');
//pegar  o contexto do canvas
//duvidas rever a aula da Alura de Canvas
let ctx = screen.getContext('2d');
let canDraw = false ;
let mouseX = 0;
let mouseY = 0;


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
 
//  estas funcoes devem ser realizadas dentro da tela do canvas 
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
//mousedown, mousemove,  mouseup   são funçoes ( funcoes nativas ) javascript como o click

//para limpar a tela
document.querySelector('.clear').addEventListener('click', clearScreen);



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

function mouseDownEvent(e){
   // console.log(" Clicou no mouse");
   canDraw = true ;
   //para descobrir o ponto inicial da pintura
   mouseX = e.pageX - screen.offsetLeft;
   mouseY = e.pageY - screen.offsetTop;

}

function mouseMoveEvent(e){
    //console.log(" Moveu o mouse");
    if( canDraw){
        // console.log(e.pageX, e.pageY);
        //let pointX = e.pageX - screen.offsetLeft;
        //let pointY = e.pageY - screen.offsetTop; 
        // console.log( pointX, pointY);
        //
        desenhando( e.pageX , e.pageY);

    }
}

function mouseUpEvent(){
    // console.log(" Soltou o mouse");
    canDraw = false ;
}

function desenhando( x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop ;

    ctx.beginPath();
    //desenha umalinha de 1 pixles 
    ctx.lineWidth = 5;
    //grossura da lina 
    ctx.lineJoin = "round";
    //redondo
    ctx.moveTo( mouseX, mouseY);
    ctx.lineTo( pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();



    mouseX = pointX ;
    mouseY = pointY ;
}

function clearScreen(){
   //setar posicao geral
   //zerar cursor e funcao de desenho 
   
   ctx.setTransform(1,0,0,1,0,0);
   //
   ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}