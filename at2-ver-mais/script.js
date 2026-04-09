/*
Pesquise alguma API free e implemente uma função assíncrona segura 
que capte os dados dessa API e exiba os resultados dentro de <p></p>
com cada um dos dados retornados
*/

// Programação assíncrona

const x = Number(prompt("Informe um ponto para o eixo x"))
const y = Number(prompt("Informe um ponto para o eixo y"))
const wg = Number(prompt("Informe uma largura"))
const hg = Number(prompt("Informe uma altura"))

const retc_info = [x, y, wg, hg]

async function validateData(infos) {

    for (let i = 0; i > infos.lenght; i++)
    {
        if (isNaN(infos[i]))
            throw new Error("value is not a number");
    }

    return infos
}

function createRect(validateInfos) {
    try {
        const canvas = document.querySelector("#canvas")
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#ac1d58";
        return ctx.fillRect(validateInfos[0], validateInfos[1], validateInfos[2], validateInfos[3]);
    }
    catch (e) {
        console.log(e.message)
    }
}

createRect(validateData(retc_info));
