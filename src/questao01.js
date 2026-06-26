import leia from 'readline-sync'

var valordacompra = leia.questionFloat("qual o valor da compra?"  )
var destino = leia.questionInt("qual o destino do produto?) ")

if( valor > 500) {
    console.log ("o valor da compra é maior que 500, o frete é gratis")

} else (valor <= 500) 
    console.log ("o valor da compra é menor que 500, o frete é de 50 reais")
;

