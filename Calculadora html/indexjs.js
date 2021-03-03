
var operacion;
var resultado;
window.onload = function() {
    //alert("iniciado");
    resultado=document.getElementById("Resultado");
    operacion=document.getElementById("Operacion");

};
function clickButton(event){
    //alert(event.target.value);
    
    addTextOperation(event.target.value)
    return null;
}

function addTextOperation(addval){
    try {
    if(addval=='='){//si el signo es el =, resolver operacion
        //resultado.innerHTML=operacion.value;//para h1 remplaza por innerhtml
        var r=Calculadora.Resolver(operacion.value);
        resultado.innerHTML=r;
    }
    else
    operacion.value=operacion.value+addval;
        } 
    catch (error) {
  //console.error(error);
 resultado.innerHTML="error";
}
}
    