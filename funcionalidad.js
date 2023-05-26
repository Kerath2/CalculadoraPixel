var operandoa=0;
var operandob=0;
var operacion;
var historial = [];
var div = document.getElementById('mi-div');
var hist = document.getElementById('historial');
function init(){
    //variables
    var resultado=document.getElementById("resultado");
    var proceso=document.getElementById("proceso")
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var division=document.getElementById("division");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var multiplicacion=document.getElementById("multiplicacion");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var menos=document.getElementById("menos");
    var igual=document.getElementById("igual");
    var reset=document.getElementById("reset");
    var cero=document.getElementById("cero");
    var sumar=document.getElementById("sumar");
    var punto=document.getElementById("punto");
    //eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick= function(e){
        resetear()
    }
    sumar.onclick= function(e){
        operandoa=resultado.textContent;
        operacion = "+";
        div.style.backgroundColor = "#1329d0";
        hist.style.backgroundColor = "#1329d0";
        
        limpiar()
    }
    menos.onclick= function(e){
        operandoa=resultado.textContent;
        operacion = "-";
        limpiar()
    }
    multiplicacion.onclick= function(e){
        operandoa=resultado.textContent;
        operacion = "*";

        limpiar()
    }
    division.onclick= function(e){
        operandoa=resultado.textContent;
        operacion = "/";
        limpiar()
    }
    igual.onclick= function(e){
        operandob=resultado.textContent;
        resolver()
    }
}
function limpiar(){
    resultado.textContent = "";
    proceso.textContent=operandoa + operacion;
}
function resetear(){
    resultado.textContent = "";
    proceso.textContent = "";
    operandoa=0;
    operandob=0;
    operacion="";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res=parseFloat(operandoa) + parseFloat(operandob)
            aux=operandoa + " " + operacion + " " + operandob + " ="
            resetear();
            proceso.textContent=aux
            resultado.textContent = res;
            historial.push(aux + res);
            document.getElementById("cuerpo-historial").innerHTML = historial.join("<br>");
            break;
        case "-":
            res=parseFloat(operandoa) - parseFloat(operandob)
            aux=operandoa + " " + operacion + " " + operandob + " ="
            resetear();
            proceso.textContent=aux
            resultado.textContent = res;
            historial.push(aux + res);
            document.getElementById("cuerpo-historial").innerHTML = historial.join("<br>");
            break;
        case "*":
            res=parseFloat(operandoa) * parseFloat(operandob)
            aux=operandoa + " " + operacion + " " + operandob + " ="
            resetear();
            proceso.textContent=aux
            resultado.textContent = res;
            historial.push(aux + res);
            document.getElementById("cuerpo-historial").innerHTML = historial.join("<br>");
            break;
        case "/":
            res=parseFloat(operandoa) / parseFloat(operandob)
            aux=operandoa + " " + operacion + " " + operandob + " ="
            resetear();
            proceso.textContent=aux
            resultado.textContent = res;
            historial.push(aux + res);
            document.getElementById("cuerpo-historial").innerHTML = historial.join("<br>");
            break;
    }

}