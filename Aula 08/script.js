let resultado = document.querySelector('#cadastro')

function cadastro() {
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profissao = document.querySelector('#profissao').value
    return resultado.innerHTML = `Seu nome e sobrenome ${nome} ${sobrenome} a tua idade é ${idade} e voce trabalha como ${profissao}`
}