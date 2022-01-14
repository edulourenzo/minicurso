const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/826`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'aplication/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        

    });
}

botao.onclick = pegarPersonagem;