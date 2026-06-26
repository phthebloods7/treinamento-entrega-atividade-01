import leia from 'readline-sync'
var vitorias = leia.questionInt("quantas vitorias o time teve?"  ) * 3
var empates = leia.questionInt("quantos empates o time teve?"  ) *1
var derrotas = leia.questionInt("quantas derrotas o time teve?"  ) *0
var pontuacao = vitorias + empates + derrotas
console.log("a pontuação do time é de " + pontuacao + " pontos")
if (pontuacao >= 70) {
    console.log("o time é campeao")
}else if (pontuacao > 45 && pontuacao < 70) {
    console.log("o time está classificado")
} else {
    console.log("o time está rebaixado")
}
