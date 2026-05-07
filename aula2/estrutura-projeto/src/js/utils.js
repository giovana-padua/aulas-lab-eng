export function saudacao(nome) { return `Olá, ${nome}` }

export async function pegaCep(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${value}/json/`) // acessa a api quando o usuario da tab no campo cep
        const dados = await resposta.json()
        return dados
    } catch (error) {
        console.log(error)
        return undefined
    }
}

export function pegarHoraAtual() {
    const agora = new Date()
    const hour = String(agora.getHours()).padStart(2, '0')
    const minutes = String(agora.getMinutes()).padStart(2, '0')
    const seconds = String(agora.getSeconds()).padStart(2, '0')
    return `${hour}:${minutes}:${seconds}`
}