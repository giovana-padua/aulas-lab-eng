//import {Pessoa} from './Pessoa.js'; // Não funcionou

// Classe Pessoa
class Pessoa {
    constructor(genero, caminhoImg, quantidade) {
        this.genero = genero.toLowerCase()
        this.icone = caminhoImg.toLowerCase()
        this.quantidade = quantidade
    }

    somar() {
        this.quantidade++
        return this.quantidade
    }

    subtrair() {
        if (this.quantidade == 0)
            return 0

        this.quantidade--
        return this.quantidade
    }

    zerar() {
        this.quantidade = 0
        return this.quantidade
    }
}

// Instância dos objetos no vetor
const vet_pessoas = [
    new Pessoa('homens', './assets/img/freepik_man.png', 0),
    new Pessoa('mulheres', './assets/img/freepik_woman.png', 0)
]

// Elementos HTML
// Estrutura básica
document.querySelector("#container").innerHTML = `
    <div class="top">
        <h1 class="title">
            Total
            <button class="redefinir" id="redefinir" onclick="${zerar()}">
                <img src='./assets/img/redefinir.png' title='https://www.flaticon.com/br/icones-gratis/redefinir'>
            </button>
        </h1>
        <p id="total" class=qtd>${calcularTotal()}</p>
    </div>

    <div id="contadores"></div>`

// Div de cada Objeto
for (let i = 0; i < vet_pessoas.length; i++) 
{
    document.querySelector("#contadores").insertAdjacentHTML(
        'beforeend', `
        <div class="pessoa" id=${vet_pessoas[i].genero}>
            <img src="${vet_pessoas[i].icone}">
    
            <div>
                <button class="somar">+</button>
                <button class="subtrair">-</button>
            </div>
    
            <p class="genero">${vet_pessoas[i].genero}</p>
    
            <p class="qtd">${vet_pessoas[i].quantidade}</p>
        </div>`)
}

// Funções
function somar(gen) {
    if (gen == 'h')
        return vet_pessoas[0].somar()
    else
        return vet_pessoas[1].somar()
}

function subtrair(gen) {
    if (gen == 'h')
        return vet_pessoas[0].subtrair()
    else
        return vet_pessoas[1].subtrair()
}

function zerar(gen) {
    if (gen == 'h')
        return vet_pessoas[0].zerar()
    else
        return vet_pessoas[1].zerar()
}

function calcularTotal() {
    let total = 0
    for (let i = 0; i < vet_pessoas.length; i++) {
        total += vet_pessoas[i].quantidade
    }
    return total
}

// Processamento
// Eventos dos botões
const homens_btns = document.querySelector('#homens').querySelectorAll('button')
const mulheres_btns = document.querySelector('#mulheres').querySelectorAll('button')
const redefinir_btn = document.querySelector('#redefinir')

const homens_total = document.querySelector('#homens').querySelector('.qtd')
const mulheres_total = document.querySelector('#mulheres').querySelector('.qtd')
const total_pessoas = document.querySelector('#total')

homens_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.className == 'somar')
            homens_total.innerHTML = somar('h')
        else
            homens_total.innerHTML = subtrair('h')
        total_pessoas.innerHTML = calcularTotal()
    })
})

mulheres_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.className == 'somar')
            mulheres_total.innerHTML = somar('m')
        else
            mulheres_total.innerHTML = subtrair('m')
        total_pessoas.innerHTML = calcularTotal()
    })
})

redefinir_btn.addEventListener('click', () => {
    homens_total.innerHTML = zerar('h')
    mulheres_total.innerHTML = zerar('m')
    total_pessoas.innerHTML = calcularTotal()
})
