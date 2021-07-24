//adicionar os elementos que iremos trabalhar
// esta sendo usado a variavel  LET nos projetos

let digitalElement = document.querySelector('.digital');
//selecionando  a classe digital do index.html

let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');



function updateClock(){

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //até aqui pegamos o tempo 

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}` ;
    //aqui mnadamos inseir no Html  ainformação do tempo 

    //agora começa o relogio analogico
    //ja tem os segundos
    //é o css que manda nas rotações 
    //mudar a propriedade do css
    let sDeg = ((360 / 60) * second) - 90 ;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour ) -90;
    //tirar o 90 graus pois no CSS o  inicio começa em 15 minutos 
    //360 graus é o angulo todo do relogio
      
    
    
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    //aqui é para deixar o segundo na rotação de zero, como nos relógios normais 

   
    

    //circulo com 360 graus / por quantidade de segundos 
    //360 /60 = 6 
    // para cada segundo =  6 graus


}

//criar funcao  para informar quando é menor que 10 adicionar zero antes 
function fixZero( time ){
    //if( time < 10  ){return '0'+time;} else{ return time;}
    //criando o if em uma linha só 
    // operador ternario ???
    return time<10 ? `0${time}`: time;
}

// a cada mil milesundos = 1 segundo roda a funcao 
setInterval( updateClock, 1000 );
//para eliminar o delay do inicio do processo  basta chamar a funcao primeiro
updateClock();




