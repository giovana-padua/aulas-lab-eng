const dia_semana = prompt("Informe um dia da semana sem 'feira'", "Segunda") // "segunda" é um valor padrão
if (dia_semana) { // verificando se é nula
    switch(dia_semana.toLocaleLowerCase()) {
        case "sábado":
        case "sabado":
        case "domingo":
            alert("É sua folga")
            break
            // Sábado e Domingo usam o mesmo alert e break
        default:
            alert("Você não está de folga, vai trabalhar!")
            break
    }
}