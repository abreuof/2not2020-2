let vetor1 = []                         //forma "moderna"
let vetor2 = Array()                    //forma "tradicional"

// criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

//inserção de novos valores em um vetor

//forma 1: push() - adiciona novos elementos ao final do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

//forma 2: unshift() - adiciona novos elementos no inicio do vetor
vetor1.unshift('maçã')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

//forma 3: splice()
//1º parametro: a posição de inserção
//2º parametro: quantos elementos serão eliminados (para inserção, colocar 0)
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

//remoção de elementos do vetor

//forma 1: pop() - retira o ultimo elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//forma 2: shift() - retira o primeiro elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//forma 3: splice()
//1º parametro: a posição para remoção
//2º parametro: a quantidade de elementos a serem removidos
//o retorno de splice() na remoção será um vetor contendo os
//itens removidos
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

//o splice() tambem serve para fazer subistituições
vetor1.splice(1, 1, 'pera')
console.log(vetor1)

//colocando mais alguns elementos no vetor
vetor1.push('amora', 'jabuticaba')
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//métodos de percurso de vetores

//forma 1: usando o for tradicional
//o inicio da variavel é sempre na posição 0 e seu incremento
//deve ir até uma posição antes do seu número de elementos (length)
for(let i = 0; i < vetor1.length; i++){
    console.log(vetor1[i])
}

//forma2: for..of
for(let fruta of vetor1){
    console.log(fruta)
}