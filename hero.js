// Desafio Classificador de Nível de Herói

let nickname = " Blind "
let nivel = 7000

if(nivel <= 1000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Ferro. Parabéns! ")
}else if(nivel > 1001 && nivel<= 2000){
    console.log("  O nome do hero é " + nickname + " Está no Nível de Bronze. Parabéns!  ")
}else if(nivel > 2001 && nivel <= 5000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Prata. Parabéns! ")
}else if(nivel > 5001 && nivel <= 7000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Ouro. Parabéns! ")
}else if( nivel> 7001 && nivel <= 8000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Platina. Parabéns! ")
}else if(nivel > 8001 && nivel <= 9000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Ascendente. Parabéns! ")
}else if(nivel > 9001 && nivel <= 10000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Imortal. Parabéns! ")
}else if(nivel>= 10000){
    console.log(" O nome do hero é " + nickname + " Está no Nível de Radiante. Parabéns! ")
}