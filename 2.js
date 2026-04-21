 pacientes = ["Carlos", "Fernanda", "Pedro", "Osvaldo", "Lucas", "Rogério", "Estela", "Gabriel", "César", "Paulo"]

function removeFila(pacientes, pacRemovido){
    let contador = 0
    for(let i = pacRemovido; i <= 8; i++){
    pacientes[i] = pacientes[i + 1]
    contador++
    }
    pacientes[pacientes.length - 1] = null
    return{
        filaPaciente: pacientes,
        contagem: contador
    }
}

resultado = removeFila(pacientes, 7)
console.log("Fila atualizada: ", resultado.filaPaciente)
console.log("Contagem: ", resultado.contagem)

//exercicio 3 implementado junto.