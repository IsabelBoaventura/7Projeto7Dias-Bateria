// quantas questões há 
//pegar a primeira questao
//clicar em uma das respostas 
//passar para a proxima ate a ultima 

//exibir questão
//console.log(questions.length);

/** Initial Data */ 
//qual a questão atual a ser exibida 
let currentQuestion = 0;

showQuestion();


/**
 * Functions 
 */

//mostrar a questão
//funcao que faça o processo de exibir a questao 
function showQuestion(){
    if(questions[currentQuestion] ){
        let q = questions[currentQuestion];
        //console.log(q.question);
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;
        //[12 minutos de video ]

    }else{
      //acabaram as questoes  
    }
}
