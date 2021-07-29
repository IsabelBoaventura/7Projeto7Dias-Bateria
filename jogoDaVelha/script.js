//entender o html para conseguir complementar ele 
//data-item identifica cada casa
//jogo geralmente tem no m�nimo 3 etapas diferentes 
// 1 - Dados iniciais ( o que precisa ter para o jogo come�ar a funcionar )
// 2 - Eventos
// 3 - funcoes que auxiliam o evento a acontecer 

//Dados iniciais 
//objeto com cada uma das casas e o valor que tem em cada uma delas 
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}; // isto pe um objeto


let player  = '';//vez de quem  � 
let warning ='';//quem ganhou
let playing = false ; ///descobrir se o jogo esta acontecendo

reset(); // para iniciar limpando 




//Eventos 
//botao de resetar 
document.querySelector('.reset').addEventListener('click', reset);

//Funcoes

//funcao para resetar 
function reset (){
    warning='';
    //escolher o que ir� iniciar 
    let random = Math.floor(Math.random()*2);
    player = ( random ===0 )? 'X' : 'O';
    //if( random === 0){
        //player ='X';
    //}else{
       //player ='O';   
    //}

    //zerar os quadros
    //objeto em javascrit pode ser acessado por square.a1 assim como por square['a1']
    for (let i in square){
        square[i] = ''; // limpa os dados da mem�ria mas nao da tela       

    }

    playing = true;// jogando
    
    renderSquare();// reiniciar a pontua��o do jogo
    renderInfo(); // reiniciar a informa��o do jogo

}


function renderSquare(){
    //percorre o quadro, se tivr alguma informa��o preenchida coloca no HTML
    for(  let i in square){
        //console.log("ITEM: ", i,  square.i);
        //at� aqui vimos o campo,  mas n�o a informa��o do campo
        //agora selecionar o que esta no HTML
        let item = document.querySelector(`div[data-item=${i}]`);
        //if ( square[i] !== ''){
           // item.innerHTML = square[i];
            //se for diferente de vazio, preenche no  HTML 
        //}else{
            //caso contrario
           // item.innerHTML = '';
        //}
        item.innerHTML = square[i];
    }

}

function renderInfo(){
    //pega as variaveis vencedor e jogando
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning ;
    // [ video em 21 minutos ]

}