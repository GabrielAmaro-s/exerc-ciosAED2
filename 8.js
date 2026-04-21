temp = new Array(5)
contador = 0
function insereForcado(temp, valor){
    if(contador < temp.length){
        temp[contador] = valor
        contador++
    } else {
        temp = novoVetor(temp, valor)
    }
    return temp
}

function novoVetor(temp, valor){
    temp2 = new Array(10)
    for(i = 0; i <= temp.length - 1; i++){
        temp2[i] = temp[i]
    }
    if(contador < temp2.length){
        temp2[contador] = valor
        contador++
    }
    return temp2
}


temp = insereForcado(temp, 25)
console.log(temp)
temp = insereForcado(temp, 35)
console.log(temp)
temp = insereForcado(temp, 45)
console.log(temp)
temp = insereForcado(temp, 55)
console.log(temp)
temp = insereForcado(temp, 65)
console.log(temp)
temp = insereForcado(temp, 15)
console.log(temp)
