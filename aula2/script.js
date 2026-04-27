/* O bloco a seguir:

function subtrai(d, e) {
    return d - e
}

Pode ser escrito assim:
const subtrai = (b, c) => b - c;

alert(subtrai(20, 10))


function criarContador() {
    let contagem = 0

    return {
        incrementar: () => {
            contagem++
            console.log(contagem)
        },
        valorAtual: () => contagem
    }
}

/* Dessa forma, retorna apenas 1
criarContador().incrementar()
criarContador().incrementar()

const contador = criarContador()
contador.incrementar()
contador.incrementar()
*/

// Programação assíncrona

function callback(erro, resultado) {
    if(erro != null) {
        console.log(`Houve um erro: ${erro}`)
        return
    }
    console.log(resultado)
}

function buscarUsuario(callback) {
    setTimeout(() => {
        callback(null, {
            nome: "André",
            idade: 31
        }),
        3000
    })
}

//buscarUsuario(callback);

/*
fetch("https://viacep.com.br/ws/19025000/json") // requisição da url
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))

*/

async function pegarCep(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const resultado = await resposta.json()
    //console.log(resultado)
    return resultado
}

//console.log(pegarCep("httsasfc")) // retorna uma promisse
//   .then(result => console.log(result))

/*
const executar = async (cep) => {
    try {
        return await pegarCep(cep)
    } 
    catch (error) {
        return error // captar o erro e retorná-lo
    }
    finally {
        console.log("Finalizado com sucesso!")
    }
}
executar("19025000").then(result => console.log(result))
*/

async function executarComSeguranca() {
    let cep = "19025000"
    try {
        var dados = await pegarCep(cep) // try/catch não vai funcionar sem um await
        return dados
    }
    catch(error) {
        console.error("Houve um erro: ", error)
    }
    finally {
        console.log("Finalizado com sucesso")
    }
}

executarComSeguranca().then(result => console.log(result))