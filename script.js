function CalcularSomatorio(){
    var resultado = document.getElementById("resultado");
    resultado.value = SomarMultiploDe3EDe5(document.getElementById("numero").value);
}


function SomarMultiploDe3EDe5(numero){
    let soma = 0;
    for(let i = 0; i <numero ; i++){
        if(i % 3 === 0 || i % 5 ===0){
        soma += i;
        }
    }
    return soma;
}
