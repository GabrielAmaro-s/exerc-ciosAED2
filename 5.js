temp = [12, 25, 34, 56, 78, 98, 65, 45, 32, 80]
valorBuscado = 0

function existeTemperatura(temp, valorBuscado){
    for(i = 0; i <= temp.length; i++){
        if(temp[i] == valorBuscado){
            return i
        }
    }
    return -1
}

 console.log(existeTemperatura(temp, 65))
