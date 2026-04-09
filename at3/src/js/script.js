
function selectRole(role) {
    const professors = document.querySelectorAll('.professor')
    const students = document.querySelectorAll('.student')

    if (role.id === 'irole_student') {
        professors.forEach(el => el.classList.add('hidden'))
        students.forEach(el => el.classList.remove('hidden'))
    } else {
        students.forEach(el => el.classList.add('hidden'))
        professors.forEach(el => el.classList.remove('hidden'))
    }
}

function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, '').substring(0, 11)

    if (valor.length > 2)
        valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`

    if (valor.length > 9)
        valor = `${valor.substring(0, 9)}-${valor.substring(9)}`

    input.value = valor
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.elements.iname.value.trim()
    const email = form.elements.iemail.value.trim()
    const date = form.elements.idate.value.trim()
    const telephone = form.elements.itelephone.value.trim()
    const smartphone = form.elements.ismartphone.value.trim()
    const role = form.elements.irole.value.trim()
    const enrollment = form.elements.ienrollment.value.trim()

    const field = form.elements.ifield.value.trim()
    const lattes = form.elements.ilattes.value.trim()
    const current = form.elements.icurrent.value.trim()

    if (!name) {
        alert('Nome é obrigatório')
    } else if (!email) {
        alert('E-mail é obrigatório')
    } else if (!date) {
        alert('Data de nascimento é obrigatória')
    } else if (!telephone) {
        alert('Telefone fixo é obrigatório')
    } else if (!smartphone) {
        alert('Celular é obrigatório')
    } else if (!role) {
        alert('Ocupação é obrigatória')
    } else if (
        (role === 'Professor' && enrollment.length !== 5) ||
        (role === 'Aluno' && enrollment.length !== 10)
    ) {
        alert('Matrícula deve ter 5 dígitos (Professor) ou 10 (Aluno)')
    } 
    else if (role === 'Aluno' && !current) {
        alert('Curso é obrigatório')
    } 
    else if (role === 'Professor' && !field) {
        alert('Área é obrigatória')
    } 
    else if (role === 'Professor' && !lattes) {
        alert('Lattes é obrigatório')
    } 
    else {
        form.submit()
    }
})

function verificarConteudo(input) {
    if (!input.value) {
        input.value = prompt(input.placeholder)
    }
}

function cadastrarUsuario(form) {
    const name = form.elements.iname.value.trim()
    const email = form.elements.iemail.value.trim()
    const date = form.elements.idate.value.trim()
    const telephone = form.elements.itelephone.value.trim()
    const smartphone = form.elements.ismartphone.value.trim()
    const role = form.elements.irole.value.trim()
    const enrollment = form.elements.ienrollment.value.trim()

    const field = form.elements.ifield.value.trim()
    const lattes = form.elements.ilattes.value.trim()
    const current = form.elements.icurrent.value.trim()

    let user

    if (role === 'Professor') {
        user = new Professor(name, email, date, telephone, smartphone, role, enrollment, field, lattes)
    } else {
        user = new Aluno(name, email, date, telephone, smartphone, role, enrollment, current)
    }
}