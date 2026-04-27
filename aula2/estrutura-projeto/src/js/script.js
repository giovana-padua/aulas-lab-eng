const app = document.getElementById('app')
const btn = document.createElement('button')
btn.textContent = 'Clique'
btn.addEventListener('click', () => alert('Olá!'))
app.appendChild(btn)

// Formulário e validação
const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    // Faz o mesmo que o required, porém assim é possível ter uma validação mais complexa
    e.preventDefault()
    const name = form.nextElementSibling.nome.value.trim()
    if(!name) 
        alert ('Nome obrigatório')
    else
        form.submit()
})

// Inserindo dados via API
const cep = document.getElementById('cep')
const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')

cep.addEventListener('blur', async (e) => { 
    const value = cep.value // valida se ha dados em cep
    if(value) {
        const resposta = await fetch(`https://viacep.com.br/ws/${value}/json/`) // acessa a api quando o usuario da tab no campo cep
        const dados = await resposta.json()
        if(dados !== undefined) { // autopreenche os campos logradouro e bairro se os dados da api forem validos
            logradouro.value = dados.logradouro
            bairro.value = dados.bairro
        }
    }
})
