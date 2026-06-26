import leia from 'readline-sync'

var idade = leia.questionInt("qual a sua idade?"  )
var estudante = leia.keyInSelect(["sim","nao"], "voce é estudante?"  )
var diadasemana = leia.keyInSelect(["seg", "ter", "qua", "qui", "sex", "sab", "dom"], 'informe o dia')
var ingresso = 40;


if( idade < 12){
    console.log ("valor do ingresso é r$ " + ingresso.toFixed(2))
    console.log ("valor do desconto é r$ " + (ingresso - 15).toFixed(2))
    console.log ("valor cobrado é r$" + (15).toFixed(2))
} else {
    if(diadasemana == 0) {
    var desconto = ingresso - (ingresso * 0.5);
        console.log ("valor do ingresso é r$ " + ingresso.toFixed(2))
    console.log ("valor do desconto é r$ " + desconto.toFixed(2))
    console.log ("valor cobrado é r$" + (ingresso - desconto).toFixed(2))
    } else if(diadasemana !== 0 && estudante === true) {
        var desconto = ingresso - (ingresso * 0.7);
        console.log ("valor do ingresso é r$ " + ingresso.toFixed(2))
        console.log ("valor do desconto é r$ " + desconto.toFixed(2))
        console.log ("valor cobrado é r$" + (ingresso - desconto).toFixed(2))
    } else {
        console.log ("valor do ingresso é r$ " + ingresso.toFixed(2))
        console.log ("valor do desconto é r$ 0.00")
        console.log ("valor cobrado é r$" + ingresso.toFixed(2))
    }
}