
// inicializar variável contadora
let total = 0

//import {Pessoa} from './Pessoa.js'; // Não funcionou

// Classe Pessoa
class Pessoa {
    constructor(genero, caminhoImg, quantidade) {
        this.genero = genero
        this.icone = caminhoImg
        this.quantidade = quantidade
    }

    somar() {
        this.quantidade++
    }

    subtrair() {
        this.quantidade--
    }
}

// Criando objetos
const vet_pessoas = [
    new Pessoa('Homens', './assets/img/freepik_man.png', 0),
    new Pessoa('Mulheres', './assets/img/freepik_woman.png', 0)
]

console.log(vet_pessoas)

// Adicionando os elementos HTML
document.querySelector("#container").innerHTML = 
    `<h1>
        Total
        <button class="redefinir" id="redefinir" onclick=''></button>
    </h1>
    <p id="total" class=qtd></p>
    <div id="contadores">
    </div>
    `

// Adicionando objetos no HTML
for (let i = 0; i < vet_pessoas.length; i++) 
{
    total += vet_pessoas[i].quantidade
    document.querySelector("#contadores").insertAdjacentHTML(
        'beforeend', 
        `
        <div class="pessoa">
            <img src="${vet_pessoas[i].icone}">
    
            <div>
                <button class="somar" onclick="${vet_pessoas[i].somar()}">+</button>
                <button class="subtrair" onclick="${vet_pessoas[i].subtrair()}">-</button>
            </div>
    
            <p>${vet_pessoas[i].genero}</p>
    
            <p class="qtd">${vet_pessoas[i].quantidade}</p>
        </div>
        `
    )
}

document.querySelector('#total').innerHTML = total


function zerar() {
    for (let i = 0; i < vet_pessoas.length; i++) {
        vet_pessoas[i].quantidade = 0
    }
}
