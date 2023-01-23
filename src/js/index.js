const botaoTrailer = document.querySelector(".botao-trailer");

const fecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const linkDoVideo = video.src;

function alterarModal() {
    modal.classList.toggle("aberto");
}

 botaoTrailer.addEventListener("click", () => {
     alterarModal();                //Podendo ultilizar tb o classList.toggle()
     video.setAttribute("src", linkDoVideo);
 });

 fecharModal.addEventListener("click", () => {
    alterarModal();               //Podendo ultilizar tb o classList.toggle()
    video.setAttribute("src", "");
 });

 