valores = [1, 3, 4, 2, 5]

function inverteVetor(valores){
primeiro = 0
ultimo = valores.length - 1
while (primeiro < ultimo){
    aux = valores[primeiro]
    valores[primeiro] = valores[ultimo]
    valores[ultimo] = aux
    primeiro = primeiro + 1
    ultimo = ultimo - 1
}
    return valores
}

console.log(inverteVetor(valores))