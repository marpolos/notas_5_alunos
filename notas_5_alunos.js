nome1 = prompt("Digite o nome do aluno:")
notas1 = prompt("Digite as notas da seguinte forma: n1,n2,n3").split(",")
n1 = parseFloat(notas1[0])
n2 = parseFloat(notas1[1])
n3 = parseFloat(notas1[2])
med1 = (n1+n2+n3)/3
if (med1>=5){
status1 = "APROVADO"
}else {
status1 = "REPROVADO"
}
nome2 = prompt("Digite o nome do aluno:")
notas2 = prompt("Digite as notas da seguinte forma: n1,n2,n3").split(",")
n1 = parseFloat(notas2[0])
n2 = parseFloat(notas2[1])
n3 = parseFloat(notas2[2])
med2 = (n1+n2+n3)/3
if (med2>=5){
status2 = "APROVADO"
}else {
status2 = "REPROVADO"
}
nome3 = prompt("Digite o nome do aluno:")
notas3 = prompt("Digite as notas da seguinte forma: n1,n2,n3").split(",")
n1 = parseFloat(notas3[0])
n2 = parseFloat(notas3[1])
n3 = parseFloat(notas3[2])
med3 = (n1+n2+n3)/3
if (med3>=5){
status3 = "APROVADO"
}else {
status3 = "REPROVADO"
}
nome4 = prompt("Digite o nome do aluno:")
notas4 = prompt("Digite as notas da seguinte forma: n1,n2,n3").split(",")
n1 = parseFloat(notas4[0])
n2 = parseFloat(notas4[1])
n3 = parseFloat(notas4[2])
med4 = (n1+n2+n3)/3
if (med4>=5){
status4 = "APROVADO"
}else {
status4 = "REPROVADO"
}
nome5 = prompt("Digite o nome do aluno:")
notas5 = prompt("Digite as notas da seguinte forma: n1,n2,n3").split(",")
n1 = parseFloat(notas5[0])
n2 = parseFloat(notas5[1])
n3 = parseFloat(notas5[2])
med5 = (n1+n2+n3)/3
if (med5>=5){
status5 = "APROVADO"
}else {
status5 = "REPROVADO"
}
alert(nome1 + " foi " + status1 + "; \n" + nome2 + " foi " + status2 + "; \n" + nome3 + " foi " + status3 + "; \n" + nome4 + " foi " + status4 + "; \n" + nome5 + " foi " + status5)
