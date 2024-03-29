//entender o html para conseguir complementar ele 
//data-item identifica cada casa
//jogo geralmente tem no mínimo 3 etapas diferentes 
// 1 - Dados iniciais ( o que precisa ter para o jogo começar a funcionar )
// 2 - Eventos
// 3 - funcoes que auxiliam o evento a acontecer 

//Dados iniciais 
//objeto com cada uma das casas e o valor que tem em cada uma delas 
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}; // isto pe um objeto


let player  = '';//vez de quem  é 
let warning ='';//quem ganhou
let playing = false ; ///descobrir se o jogo esta acontecendo

reset(); // para iniciar limpando 




//Eventos 
//botao de resetar 
document.querySelector('.reset').addEventListener('click', reset);
// agora para marcar ou saber quem esta sendo marcado 
//document.querySelector('div[data-item=a1]').addEventListener('click', itemClick);
//document.querySelector('div[data-item=a2]').addEventListener('click', itemClick);
//document.querySelector('div[data-item=a3]').addEventListener('click', itemClick);
//desta maneira ja estou vendo que será muito lento,  pois tera de olhar cada um dos itens 
// e se o jogo da velha tivesse 9 * 9 itens - inviavel no meu entender assim 

// opcao 2 -  para monitorar onde foi clicado 
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click', itemClick);
});
//pega todos os itens , seleciona cada um deles, e adiciona o evento de click
 //desta forma pega todos os que estao com a classe item  e percorre com o foreach 
 // [ 25 minutos de video ]



//Funcoes


function itemClick( event ){
    //identificar em quem clicou 
    //console.log(event.target);
    //mostra todo o div onde foi clicado
    //agora pegar o atributo data-item
    let item = event.target.getAttribute('data-item');
    //console.log(' Clicou em ', item );
    //com o item descobre em quem clicou 

    //agora marcar se estiver vazio e se o jogando ainda estiver ativo

    if(playing && square[item] === ''){
        // preenche com o player
        square[item] = player;
        //para mostrar na tela 
        renderSquare();

        //a cada jogada é necessario mudar o jogador
        togglePlayer();

    }




}

//funcao para resetar 
function reset (){
    warning='';
    //escolher o que irá iniciar 
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
        square[i] = ''; // limpa os dados da memória mas nao da tela       

    }

    playing = true;// jogando
    
    renderSquare();// reiniciar a pontuação do jogo
    renderInfo(); // reiniciar a informação do jogo

}


function renderSquare(){
    //percorre o quadro, se tivr alguma informação preenchida coloca no HTML
    for(  let i in square){
        //console.log("ITEM: ", i,  square.i);
        //até aqui vimos o campo,  mas não a informação do campo
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

    // a cada jogada verificar se alguém já ganhou 
    checkGame();

}

function renderInfo(){
    //pega as variaveis vencedor e jogando
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning ;
    // [ video em 21 minutos ]

}

//agora precisa clicar na tela e marcar - events 


//funcao para trocar de jogador
function togglePlayer(){
    //apenas altera de jogador
    //if( player === 'X'){
        //player = 'O';
    //}else{
        //player = 'X'  
    //}

    // lembrando de simplificar o IF  com o 'ternario'
    player = ( player === 'X')? 'O': 'X';

    //quando troca as informações manda exibir na tela 
    renderInfo(); //a vez é 

}


function checkGame(){
    // Há 4 opções para esta situação 
    // 1- X ganhou
    // 2 - 0  ganhou
    // 3 - Empate
    // 4 - nada aconteceu

    //saber quais as opções de vitoria e ver se algum deles ganhou

    if( checkWinnerFor('X')){
        warning = 'O "X" Venceu!';
        playing = false;
    }else if( checkWinnerFor('O')) {
        warning = 'O "O" Venceu!';
        playing = false;
    }else if(  isFull()){
        warning = 'Deu Empate!';
        playing = false;
    }else{
        playing = true;  
    }


}

function checkWinnerFor( player ){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        
        'a1,b2,c3',
        'a3,b2,c1',
        
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3'
    ]; // as possibilidades de vencer

    //verificar se o player esta nestas possibilidades 

    for ( let w in pos ){
        let pArray = pos[w].split(',');
        //verifica se a posicao do player esta preenchida 
        //every funcao do array

        //option é cada um dos pontos da array, neste caso cada uma das opçoes 
        /*
        pArray.every( ( option)=>{
            if( square[option] === player){
                return true;
            }else{
               return false; 
            }
        });
        */

        // fazendo de uma forma mais simplificada
        //pArray.every((option)=>{ return (square[option] === player);}) ;

        // simplificando 2: quando a função so tem um retorno 
        //pArray.every( (option) => (square[option] === player));

        //simplificando 3:  sendo o option com um parametro unico
        let hasWon = pArray.every( option => square[option] === player);

        if( hasWon ){ return true;   }
    }
    // se passar por todo o for e nao achar o vencedor 
    return false;
}

function isFull(){
    //loop no square e verificar se todo esta preenchido 
    for ( let i in square){
        if ( square[i] === ''){
            return false;
        }
    }
    return true;

}
