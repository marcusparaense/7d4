//PREMISSAS
//1 - JOGO DE ADIVINHAÇÃO DE NUMERO ENTRE 0 A 10
//2 - VALOR PRÉ DEFINIDO
//3 - 3 TENTATIVAS
//4 - CASO DE FALHAR, MOSTRAR NUMERO AO FINAL
//5 - IMPLEMENTAR VALOR RANDÔMICO

let tentativa = null
const valor = 8

for(let numTentativa = 1; numTentativa < 4 && tentativa != valor ; numTentativa++) {
    let tentativa = prompt(`Jogo da Adivinhação!! Digite num de 0 a 10. Tentativa ${numTentativa} de 3.`)
    if(tentativa == valor) {
        alert('Parabens você acertou!!!')
        numTentativa = 3
    }
    else if(numTentativa == 3 && tentativa != valor) {
        alert(`Game Over!!! o número correto é ${valor}!`)
    }
}


