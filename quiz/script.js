// quantas questões há 
//pegar a primeira questao
//clicar em uma das respostas 
//passar para a proxima ate a ultima 

//exibir questão
//console.log(questions.length);

/** Initial Data */ 
//qual a questão atual a ser exibida 
let currentQuestion = 0; //questao atual
let correctAnswers = 0; //respostas corretas 

showQuestion();

/** Events  */
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);


/**
 * Functions 
 */

//mostrar a questão
//funcao que faça o processo de exibir a questao 
function showQuestion(){
    if(questions[currentQuestion] ){
      let q = questions[currentQuestion];

      //para a barra ser aliemtnada a partir das questoes
      let pct  = Math.floor((currentQuestion / questions.length) * 100) ; 
      document.querySelector('.progress--bar').style.width = `${pct}%`;



      //console.log(q.question);
      //esconde a area de resiltado e mostra a area de questoies 
      document.querySelector('.scoreArea').style.display = 'none';
      document.querySelector('.questionArea').style.display = 'block';

      document.querySelector('.question').innerHTML = q.question;
      //exibir as alternativas 
      /** quando se manipula o DOM tem custo de processamento, 
       *  quando menos trabalho direto for feito direto no DOM 
       * menor gasto de memoria e processamento*/
      /** primeira opcao: limpa o dom, e a cada interação com o i irá alimentar o DOM */
      //document.querySelector('.options').innerHTML='';
      //manipulando o DOM
      //for( let i in q.options){
        //document.querySelector('.options').innerHTML += `<div>${q.options[i]}</div>`;
      //}

      /** Segunda opção: cria uma variavel, a cada interação 
       * com I irá alimentar  a variavel  
       * ao finalizar a interação com o I,  alimenta o DOM
       * interacao unica com o DOM,  economizando memoria e 
       * processameto do navegador */

      let optionsHtml ='';
      for (let i in  q.options){
        optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
      }
      document.querySelector('.options').innerHTML=  optionsHtml  ;

      //após exibir na tela,  dar um loop em cada um e adicionar o evento de Click
      document.querySelectorAll('.options .option').forEach(item => {
        item.addEventListener('click', optionClickEvent);
      });



    }else{
      //acabaram as questoes  
      finishQuiz();

    }
}


function optionClickEvent(e){
  // console.log(" clicou em ", e.target.getAttribute('data-op') );
  //armazenar a resposta do usuario em uma vsriavel
  let clickedOption = parseInt(e.target.getAttribute('data-op'));
  //comparar se a resposta dada  é a resposta certa 
  // console.log(  questions[currentQuestion].answer ); 
  if( questions[currentQuestion].answer === clickedOption ){
    //se acertou a resposta
    //console.log("ACERTOU");
    correctAnswers++;

  }else{
     console.log("Quase, mas não foi desta vez ");
  }
  currentQuestion++;
  showQuestion();


}

function  finishQuiz(){
  // descobrir a porcentagem dos acertos 
  let points = Math.floor((correctAnswers / questions.length)*100);
  console.log(" acertou porcento:", points );

  /**Para a quantida de questoes acertadas
   * de 0 a 30% 'Ta Ruim hein' cor vermelha
   * de 30% a 70% 'Parabéns'  cor amarela
   * acim a de 70% 'Muito bom' cor verde( a que esta agora ) 
   */
  if( points < 30){
    document.querySelector('.scoreText1').innerHTML ='Ta ruim hein?!';
    document.querySelector('.scorePct').style.color= 'red';

  }else if(points >=30 && points <70){
    document.querySelector('.scoreText1').innerHTML ='Parabéns!';
    document.querySelector('.scorePct').style.color= 'yellow';

  }else{
    document.querySelector('.scoreText1').innerHTML ='Muito Bom!!';
      document.querySelector('.scorePct').style.color= '#0d630d' ;

  }

  //Adicionar o porcentagem na resposta 
  document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

  /** <div class="scoreArea">
        <img src="prize.png" class="prizeImage" />
        <div class="scoreText1">Parabéns!</div>
        <div class="scorePct">Acertou 99%</div>

        */
  //para quando terminou as questoões 
  //esconde a área de questoes
  //mostra a area de resultado 
  document.querySelector('.scoreArea').style.display = 'block';
  document.querySelector('.questionArea').style.display = 'none';
  //preenche a barra em 100%
  document.querySelector('.progress--bar').style.width = '100%';


}

function resetEvent(){
  //limpar tudo
  correctAnswers = 0 ;
  currentQuestion = 0 ;
  showQuestion();
}