const numero1 = prompt("Informe um número")
// valores que vem do prompt são string por padrão
if (numero1 != null) {
    const numero2 = prompt("Informe um segundo número")
    if (numero2 != null) {
        const media = (parseInt(numero1) + parseInt(numero2)) / 2
        alert(`A média é ${media}`)
    }
}