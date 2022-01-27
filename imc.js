function calcular()
{

var nome = document.querySelector(".caixa1").value;
var altura = document.querySelector(".caixa2").value;
var peso = document.querySelector(".caixa3").value;
var resultado = document.querySelector(".resultado"); 


    if (nome !== "" && altura !== "" && peso !== "")
{
   var imc = (peso / (altura * altura)).toFixed(1);
   resultado.textContent = imc;
   var classificação = "";

    if (imc < 18.5)
{
 classificação = "Abaixo do peso";
}
    else if(imc >= 18.5 && imc <= 24.9) 
{
classificação = "Peso ideal";}

    else if(imc >= 24.9 && imc <= 30) 
{
classificação = "Acima do peso";}

    else if(imc > 30) 
{
classificação = "Gordo(a)";}

resultado.textContent = `${nome} seu IMC é ${imc} e você esta ${classificação} `;

}
    else
{
window.alert(" Preencha todos os campos");
}

}


