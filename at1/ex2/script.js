const idade = prompt("Informe sua idade")
if (idade != null)
{
    let ano_nascimento = 2026 - idade
    alert(`Você nasceu em ${ano_nascimento}`) // `essa forma $(variavel) é muito usada em react`
}