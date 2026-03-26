//document.write("Olá ao laboratório de") // aparece depois de "Engenharia de software"
// pois a tag p vem antes da linha que o write escreve
document.getElementById("texto").textContent = "Engenharia de software"

//alert("Olá, seja bem-vindo")

//console.log(confirm("Está iniciando no JS?"))

//console.log(prompt("Informe o seu nome"))

//const resultado = confirm("Deseja mesmo prosseguir?")
//console.log(typeof(resultado));

//const resposta = prompt("Informe o seu nome")
//console.log(typeof(resposta))

let valorInicial
console.log(valorInicial)

const pegarDados = function(nom, ida) {
    // object
    const dados = {
        nome: nom,
        idade: ida
    }

    const maisDados = {
        estudante: false,
        media: 8.5
    }

    // array
    const conjuntoDados = [
        dados.nome,
        dados.idade,
        maisDados.estudante,
        maisDados.media,
        //dados
    ]

    // dados.nome = "Nala" -> não muda nada
    // dados = { nome: 'teste', idade: 21} -> retorna Uncaught TypeError: Assignment to constant variable.

    console.log(conjuntoDados) // imprimir o array

}

pegarDados("Giovana", 20)

/*console.log(conjuntoDados) -> retorna Uncaught ReferenceError: conjuntoDados is not defined
pois conjuntoDados existe no contexto/escopo da função pegarDados */
let soma = 3
document.write(soma == 3 ? "O valor é 3": "O valor não é 3")

if (soma == 3) { "O valor é 3" } else { "O valor não é 3" }
