var atual = new Date()
var hora = atual.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}