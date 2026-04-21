temp = new Array(5)
contador = 0
function insereForcado(temp, valor){
    if(contador < temp.length){
        temp[contador] = valor
        contador++
    } else{
        console.log("Erro: Overflow de memória.")
    }
}

insereForcado(temp, 25)
console.log(temp)
insereForcado(temp, 35)
console.log(temp)
insereForcado(temp, 45)
console.log(temp)
insereForcado(temp, 55)
console.log(temp)
insereForcado(temp, 65)
console.log(temp)
insereForcado(temp, 15)
console.log(temp)