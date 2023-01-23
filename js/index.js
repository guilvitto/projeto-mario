/*
OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
   .passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
   .passo 2 - dar um jeito de indentificar quando o usuário clicar no botão
   .passo 3 - dar um jeito de pegar o elemento da modal no js
   .passo 4 - abrir a modal na tela
*/

console.log(document);
console.log(document.querySelector(".botao-trailer"));
const botaoTrailer = document.querySelector(".botao-trailer"); //passo 1
const modal = document.querySelector(".modal"); //passo 3
const video = document.getElementById("video"); //no html tem um id no iframe que se chama video//
const linkDovideo = video.src;

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");//passo 2 
    modal.classList.add("aberto");//passo 4 - abrir a modal na tela//
    video.setAttribute("src", linkDovideo);
});

//OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal
//passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
const botaoFecharmodal = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuário clicar no x//
botaoFecharmodal.addEventListener("click", () => {
    //passo 3 - fechar a modal
modal.classList.remove("aberto");
video.setAttribute("src", "")
//ao clicar em fechar modal o setattribute vai add um atributo ao src do video para vazio//
});


