// start
function start(){
var clicouBotao = document.querySelector('#button');
clicouBotao.addEventListener('click', ativar);

var peso = document.querySelector('#peso');
var altura = document.querySelector('#altura');
peso.addEventListener('input', ativar);
altura.addEventListener('input', ativar);
ativar();
}
//calculateIMC
function calculateIMC(weight, height){
    var resultado1 = '';
    var imc = weight / (height * height);
    if(imc < 17){
      resultado1 = "Muito abaixo do Peso";
    
    }else if(imc>=17 && imc<18.5){
        resultado1 = "Abaixo do peso";
    
    }else if(imc>=18.5 && imc<25){
        resultado1 = "Peso normal";
    
    }else if(imc>=25 && imc<30){
        resultado1 = "Acima do peso";
    
    }else if(imc>=30 && imc<35){
        resultado1 ="Obesidade Grau I";
    
    }else if(imc>=35 && imc<40){
        resultado1 = "Obesidade Grau II";
    
    }else if(imc>40){
        resultado1 = "Obesidade Grau III";
    }
    else{
        resultado1 = 'Inválido';
    }
    var res2 = document.querySelector('#res1')
    res2.innerHTML = `Este valor considera que você está na faixa: <strong>${resultado1}</strong>`;
    return weight / (height * height);
}
// ativar
function ativar(){
    var peso = document.querySelector('#peso');
    var altura = document.querySelector('#altura');
    var resultado = document.querySelector('#res');
   
    var weight = Number(peso.value);
    var height = Number(altura.value);
    console.log(weight);
    console.log(height);
   
    var imc = calculateIMC(weight, height);
    var format = imc.toFixed(2).replace('.', ',');
    resultado.innerHTML = format;
   
}
start();


