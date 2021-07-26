document.querySelector('.busca').addEventListener('submit', async ( event)=>{
   //async = codigo asincrono que não é ordenado
   
    //prevenir que o form seja enviado
    event.preventDefault();
    // prefine o comportamento padrao que a pagina deveria fazer
    //ao clicar em Buscar nada acontece 

    let input  = document.querySelector('#searchInput').value;
    //console.log( input );
    if( input !== ''){
        showWarning('Carregando...');

        let apikey = '1615692aef425960d1fd6061ae9147ca';
        let city = encodeURI( input );
        //funcao que deixa o nome da cidade correto para ser lido pela url 

        //api
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`;

        //agora fazer a conexao 
        //
        let results = await fetch(url);
        let json = await results.json();

        //await - faz a requisicao e espera o resultado; resultado é armazenado no results
        //await -  é basicamente para o javascript esperar que algo aconteça antes dele continuar 

        // console.log(json);
        if( json.cod === 200){
            //json são objetos, se caminha nos objetos com os pontos
            //se encontrou agora preenche as infroamçoes no HTML
            showInfo({
                name: json.name,
                country: json.sys.country ,
                temp: json.main.temp, 
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg

            });

            //mandar para a funcao objeto com as informações 


        }else{ showWarning('Não encontramos esta localização.');}

    }
});
//pegando a classe busca, que pertence ao form,  e verificando quando ela esta sendo trabalhada, clicando para ser enviada 

//funcao para exibir as informações 
function showInfo( info ){
    showWarning('');
    document.querySelector('.resultado').style.display= 'block';
    document.querySelector('.titulo').innerHTML = `${info.name}, ${info.country}`;
    document.querySelector('.tempInfo').innerHTML = `${info.temp}<sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${info.windSpeed}<span>km/h</span>`;

}


//funcao para os avisos 
function showWarning( msg ){
    document.querySelector('.aviso').innerHTML = msg ;
}
