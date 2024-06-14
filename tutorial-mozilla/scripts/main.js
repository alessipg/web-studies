const titulo = document.querySelector("h1");
titulo.textContent = "Cachorros Fodas"
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cachorro.jpg") {
        myImage.setAttribute("src", "images/dente.jpeg");
    } else {
        myImage.setAttribute("src", "images/cachorro.jpg");
    }
};

let myButton = document.querySelector("button");
let myButton1 = document.getElementById('nome');
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Por favor, digite seu nome");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = `Bem-vindo, ${myName}`;
    }
}
myButton1.onclick = () => {
    console.log("'test'");
    setUserName();
  }
function carregarImagem() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imagem = document.getElementById('imagemCachorro');
            imagem.src = data.message;
        })
        .catch(error => console.error('Erro ao carregar imagem:', error));
}
myButton.onclick = ()=>{
    carregarImagem();
}