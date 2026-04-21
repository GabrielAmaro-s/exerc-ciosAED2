temp = [12, 25, 34, 56, 78, 98, 65, 45, 32, 80]

function percorreTemp(temp){
menor = temp[0]
maior = temp[0]
    for(i = 1; i <= temp.length - 1; i++){
        if(temp[i] > maior){
            maior = temp[i]
        } if(temp[i] < menor){
        menor = temp[i]
        }    
    }
    console.log(`Maior: ${maior}. Menor: ${menor}`)
}

percorreTemp(temp)
