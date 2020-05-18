function typewriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
}

const texto = document.querySelector('.topText h1');
const texto2 = document.querySelector('.topText h2');
typewriter(texto);
// typewriter(texto2);