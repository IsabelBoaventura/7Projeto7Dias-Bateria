//identificar qual tecla foi clicada em todo o site
//document.body - todo o corpo do trabalho
//Listener - observador 
//Event - evento que ira acontecer 
//addEventListener - adicione um observador de eventos
// dois parametros , evento e ação 
//evento : keyup
document.body.addEventListener( 'keyup', (event)=>{
    //sempre que uma tecla for apertada
    //console.log( event.code.toLowerCase());
    //event.code tecla qeu foi precionada
    //funcionando de primeira agora :)
    //ctrl + shift + R 
    //chamar a funcao
    playSound(event.code.toLowerCase());
    //toLowerCase - transforma em minusculo

});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    //console.log('Musica: ' + song );

    //verifica se foi digita algo 
    if( song !== ''){

        //se som diferente de vazio 
        //transforma a string  em array 
        let songArray = song.split(''); 
        //transforma a strig em array 
       // console.log('Array: ' + songArray );
        //resposta no console : Array: a,a,w, ,a,a,w, ,a,a,w, ,s

        playComposition(songArray);

    }
});


//criar uma funcao para tocar o som 
function playSound( sound ){
    let audioElement = document.querySelector(`#s_${sound}`);
    //elemento de audio recebe a tag do id
    // qunado esta entre acentos é um templade string  - um tipo de string que recebe variaveis 

    //selecionar uma div que tem o >>>atributo<<< chamado >>>data-key<<<
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    //produra uma div que tenha um atributo data-key onde seu valor seja a variavel sound

    //verifica se existe o audio diigta 
    if( audioElement){
        audioElement.currentTime = 0 ;
        // para sons muito continuos para fazer ele parar para recomeçar ( exemplo do s )
        //assim não espera o som acabar para começar outro som 
        audioElement.play();
    }

    //verifica se foi o elemento clicado 
    if( keyElement){
        //se achou o elemento adiciona a class active  a ele 
        keyElement.classList.add('active');

        //funcao com parametro de espera de tempo 
        //recebe uma funcao e o tempo de espera em milesegundos 
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300);
        //funcao para remover a class active 
    }

}

function playComposition( songArray){
    let wait = 0;
    for ( let songItem of songArray){
        setTimeout( ()=>{
            playSound(`key${songItem}`);    
        }, wait);

        // playSound(`key${songItem}`);
        //executou tudo de uma vez só
        //para isto nao acontecer mais teremos de colocar a funcao de tempo antes da funcao de tocar 
        //e a funcao de tocar , vai para dentro da funcao do tempo 

        wait += 250;
        //aqui incrementa com mais milesgundos ( mil milesundos = 1 segudo)
    }
}