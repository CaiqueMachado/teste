// !DOCTYPE JAVASCRIPT
function botao(){
    document.getElementById("texto").innerHTML="O GitHub foi desenvolvido por Chris Wanstrath, J. Hyett, Tom Preston-Werner e Scott Chacon usando Ruby on Rails, e começou em fevereiro de 2008. A empresa, GitHub, Inc., existe desde 2007 e está localizada em São Francisco.";
    document.getElementById("botaozinho").innerHTML="Mostrar menos";
}

function botao2(){
    document.getElementById("texto").innerHTML="";
    document.getElementById("botaozinho").innerHTML="Mostrar mais";
}

let carro="ferrari";
if (carro=="ferrari"){
    document.getElementById("teste").innerHTML="É uma ferrari";
}else{
    document.getElementById("teste").innerHTML="Não é uma ferrari";
}