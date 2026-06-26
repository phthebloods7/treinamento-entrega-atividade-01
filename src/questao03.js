import leia from 'readline-sync'

var kwgasto = leia.questionfloat("qual a quantidade de kw gasto?"  )
var temtarifa = leia.keyInYN("tem tarifa social?" );
var valorpagar = 0;
if( kwgasto <= 100 ){
    valorpagar = kwgasto * 0.60;
} else if( kwgasto > 100 && kwgasto <= 300){
    valorpagar = kwgasto * 0.75;
}else {
    valorpagar = kwgasto * 0.90;
}

var valorfinal = (temtarifa == true) ? valorpagar - (valorpagar * 0.20) : valorpagar;
console.log("o valor a pagar é de r$ " + valorfinal.toFixed(2))

