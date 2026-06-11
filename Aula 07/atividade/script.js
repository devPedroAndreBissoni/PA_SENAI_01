let form = document.querySelector('#formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profissao = document.querySelector('#profissao').value

    let resposta = document.querySelector('#resposta')
    
    resposta.innerHTML = `Sarve ${nome} ${sobrenome}, se ta com ${idade}..... ta velinho em e se tra trabalhando com ${profissao}`
})