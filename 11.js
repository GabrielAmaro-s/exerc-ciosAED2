valores = [60, 90, 140, 42, 180, 200, 220]

function percorreVetor(valores){
    for(i = 0; i <= valores.length - 1; i++){
        mult = Math.ceil(valores[i] * 1.2)
        if(mult > 255){
            valores[i] = 255
        } else {
            valores[i] = mult
        }
    }
    return valores
}

console.log(percorreVetor(valores))