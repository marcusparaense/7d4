//PREMISSAS
//1 - JOGO DE ADIVINHAÇÃO DE NUMERO ENTRE 0 A 10
//2 - VALOR PRÉ DEFINIDO
//3 - 3 TENTATIVAS
//4 - CASO DE FALHAR, MOSTRAR NUMERO AO FINAL
//5 - IMPLEMENTAR VALOR RANDÔMICO

let tentativa = null
//const valor = 8    //"valor pré definido"

//implementação do valor aleatório
//Constantes com valores minimo e máximo
const min = 0
const max = 21

//Constante valor recebe numero aleatorio atraves do math.random 
const valor = Math.floor(Math.random() * (max - min) + min) 

//console.log(valor)


for(let numTentativa = 1; numTentativa < 4 && tentativa != valor ; numTentativa++) {
    let tentativa = prompt(`Jogo da Adivinhação!! Digite num de ${min} a ${max}. Tentativa ${numTentativa} de 3.`)
    if(tentativa == valor) {
        alert('Parabens você acertou!!!')
        numTentativa = 3
    }
    else if(numTentativa == 3 && tentativa != valor) {
        alert(`Game Over!!! o número correto é ${valor}!`)
    }
}


