valores = [3, 4 , 5, 8, 9, 10, 14, 17, 19, 34, 37, 48]

function acharValor(valores, linha, coluna, largura){
    valor = linha * largura + coluna
    return valores[valor]
}

console.log(acharValor(valores, 2, 2, 4))