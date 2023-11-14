
parag = document.querySelector('#redP1')
para1 = document.querySelector("#para1")


function carregar() {

    corpo = document.body
    corpo.style.backgroundColor = "#FFCB12"



}
//=========acende e apaga o nome youtube ==========
function trocaYoutube() {

    document.getElementById('tube').src = "imagem/youtube-vermelho.png"
    parag.style.color = "#333";

}

function trocaYoutubecinza() {
    document.querySelector("#tube").src = "imagem/youtube-cinza.png"
    parag.style.color = "#D2D3D5";
}
//=========acende e apaga o nome Instagram ==========

function trocaInsta() {
    document.getElementById('insta').src = "imagem/insta-color.png"
    para1.style.color = "#333"
}

function trocaInstacinza() {
    document.getElementById('insta').src = "imagem/insta-cinza.png"
    para1.style.color = "#D2D3D5"
}

//=========acende e apaga o nome Instagram ============
function trocaFace() {
    document.querySelector("#face").src = "imagem/face-azul.png"
    para2.style.color = "#333"
}

function trocaFacecinza() {
    document.getElementById('face').src = "imagem/face-cinza.png"

    para2.style.color = "#D2D3D5"

}

c

function adcElemento() {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
}
function formulario(){
   
    
    
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'none';
    logZap.style.transition = '2s';
    form.style.display = 'block';
    form.style.transition = '2s';

}
function closedForm(){
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'block';
    form.style.display = 'none';
}
function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5527999963567?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }

  

