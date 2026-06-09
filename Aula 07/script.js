let resultado = document.querySelector('#resultado')
function exibirCor(){
    let cor = document.querySelector('#corzinha').value 
    alert(cor)
}

function soma(){
    let valorA = Number(document.querySelector('#valorA').value)
    let valorB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valorA + valorB
}
function subi(){
    let valorC = Number(document.querySelector('#valorA').value)
    let valorD = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valorA - valorB
}
function multi(){
    let valorE = Number(document.querySelector('#valorA').value)
    let valorF = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valorA * valorB
}
function divi(){
    let valorG = Number(document.querySelector('#valorA').value)
    let valorH = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valorA / valorB
}