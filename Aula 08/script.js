let form = document.querySelector('#cauculando')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valora = Number(document.querySelector('#valora').value)
    let valorb = Number(document.querySelector('#valorb').value)

    let cauculo = document.querySelector('#cauculo')

    cauculo.innerHTML = `Soma: ${valora + valorb} Subtração: ${valora - valorb} Multiplicação: ${valora * valorb} Divisão: ${valora / valorb}`

})