const numero = prompt("Informe um número (positivo ou negativo)")
if (numero != undefined && numero != null)
{
    let mensagem = "Esse número é "
    if (numero < 0)
            mensagem += "negativo "
    else if (numero == 0)
        mensagem += "zero "
    else
        mensagem += "positivo "

    let verifica = numero % 2
    if (verifica == 0)
        mensagem += "e é par"
    else
        mensagem += "e é ímpar"

    alert(mensagem)
}