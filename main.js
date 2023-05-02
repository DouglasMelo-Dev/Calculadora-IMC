
let btncalcular = document.querySelector("#calcular")


function calculaImc(){
    let nome = document.querySelector("#nome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let resultado = document.querySelector("#resultado");


    if(nome !== "" && peso !== "" & altura !== ""){
        let imc = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (imc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (imc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (imc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (imc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (imc < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}`;
        

        resultado.style.borderColor = '#316FC4';
    }else{
        resultado.textContent = "Preencha todos os campos antes de calcular..."
        resultado.style.borderColor = '#F24402';
    }
}
btncalcular.addEventListener('click', calculaImc);

