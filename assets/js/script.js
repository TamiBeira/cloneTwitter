const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;

    /*REALIZA A VALIDAÇÃO SE ALGO FOI DIGITADO NO TEXTAREA*/
    if(tweetTextarea === '' || tweetTextarea == '  ' || tweetTextarea == undefined){
        tweetar.style.backgroundColor ='gray';
        alert('Você precisa digitar algo!');
    }else{
        tweetar.style.backgroundColor ='#1da1f2';
        criarTweet(tweetTextarea);
    }
    
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    //OBJETO
    const tweet = {
        nome: "Tamiris Beira",
        foto: "./assets/img/eu_3d.jpg",
        usuario: "@beiratamiris",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`,
        dia:`${dia}/${mes}/${ano}`
    }
    
  
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo,dia} = tweet
    
    //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li    = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    let img   = document.createElement("img");
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div   = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2    = document.createElement("h2");
    h2.innerText = nome
   
    let span  = document.createElement("span");
    span.innerText = ` ${usuario} - ${dia} - ${tempo}`

    let p     = document.createElement("p");
    p.innerText = texto
    
    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)
    
    feed.appendChild(li)
    textarea.value = ""
}   

