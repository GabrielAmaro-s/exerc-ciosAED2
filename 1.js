const pacientes = ["Carlos", "Fernanda", "Pedro", "Osvaldo", "Lucas", "Rogério", "Estela", "Gabriel", "César", "Paulo"]

function insereInicio(pacientes, novoPaciente){
    let contador = 0
    for(let i = 8; i >= 0 ; i--){
    pacientes[i + 1] = pacientes[i]
    console.log(`Movi o(a) paciente ${pacientes[i + 1]} para a cadeira ${i + 1}`)
    contador++
}
    pacientes[0] = novoPaciente
    return {
        listaPacientes: pacientes,
        contagem: contador
    }
}

resultado = insereInicio(pacientes, "Bruno")
console.log("Lugares atualizados: ", resultado.listaPacientes)
console.log("Contagem: ", resultado.contagem)