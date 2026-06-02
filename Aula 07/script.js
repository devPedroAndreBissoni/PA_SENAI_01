function exibirCor(){
    let cor = document.querySelector('#corzinha').value 
    alert(cor)
}

function soma(){
    let valorA = Number(document.querySelector('#valorA').value)
    let valorB = Number(document.querySelector('#valorB').value)
    alert(valorA + valorB)
}
function subi(){
    let valorC = Number(document.querySelector('#valorC').value)
    let valorD = Number(document.querySelector('#valorD').value)
    alert(valorC - valorD)
}
function multi(){
    let valorE = Number(document.querySelector('#valorE').value)
    let valorF = Number(document.querySelector('#valorF').value)
    alert(valorE * valorF)
}
function divi(){
    let valorG = Number(document.querySelector('#valorG').value)
    let valorH = Number(document.querySelector('#valorH').value)
    alert(valorG / valorH)
}