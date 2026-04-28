/* 
// Introdução Objetos
var carro = {
    // atributos: 'valores'
    placa: 'GI132005',
    modelo: 'EX5',
    cor: 'preto',
    peso: '825kg',
    distribuidora: 'Geely',

    // métodos
    partida: () => {
        return 'Dando partida'
    },

    parar: () => {
        return 'Parando...'
    }
}

document.write(carro.partida())
document.write(carro.parar())


// Declarar classe com function 
function Pessoa() {
    let nome

    this.setNome = function(nome) {
        this.nome = nome
    }

    this.getNome = function() {
        return this.nome
    }
}

    // Herança
function Aluno() {
    Pessoa.call(this)

    this.setNota = function(nota) {
        this.nota = nota
    }

    this.getNota = function() {
        return this.nota
    }
}


// Instância da classe (com function)
const pessoa = new Pessoa()
pessoa.setNome('Gio')
//document.write(pessoa.getNome())

const aluno = new Aluno()
aluno.setNome('Giovana')
document.write(aluno.getNome())

aluno.setNota(9.5)
document.write(aluno.getNota())
*/

// Declarar classe com class
class Pessoa {
    //let nome; // no slide pede para adicionar essa linha, mas ela gera erro

    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, `
    }
}

    // Herança
class Aluno extends Pessoa {
    constructor(nome, curso) {
        super(nome)
        this.curso = curso
    }

    estudar() {
        document.write(`${this.nome} está cursando ${this.curso}`)
    }
}

// Instância da classe (com class)
const pessoa = new Pessoa('Gio')
//document.write(pessoa.apresentar())

const aluno = new Aluno('Giovana', 'ADS')
document.write(aluno.apresentar())
aluno.estudar()


// Polimorfismo
class Animal {
    constructor(nome) {
        this.nome = nome
    }

    fazerSom() {
        console.log('som')
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log('au au')
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log('miaauu')
    }
}

const animais = [new Cachorro('doug'), new Gato('rave')]

animais.forEach(animal => {
    animal.fazerSom()
    console.log(animal.nome)
})

// Associação

class Cliente {
    constructor(nome) {
        this.nome = nome
    }
}

class Pedido {
    constructor(cliente, valor) {
        this.cliente = cliente
        this.valor = valor
    }

    exibirPedido() {
        document.write(`Cliente: ${this.cliente.nome} | Valor: R$ ${this.valor}`)
    }
}

const cli = new Cliente('Julia')
const ped = new Pedido(cli, 150)

ped.exibirPedido()
