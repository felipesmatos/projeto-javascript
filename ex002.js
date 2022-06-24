function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var num = document.getElementById('txtn')
    var nasc = Number(num.value)
    var res = document.getElementById('res')
    var sex = document.getElementsByName('radsex')
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    if (nasc >= ano || nasc === ' '){
        res.innerHTML = 'Sua data de nascimento é invalida.'
    }
    else{
        var idade = ano - nasc
        if (sex[1].checked){
            var sexo = 'feminino'
            if(idade > 0 && idade <= 10){
                imagem.setAttribute('src', 'fotos/foto-bebe-f.png')
            }
            else if(idade <= 20 ){
                //jovem
                imagem.setAttribute('src','fotos/foto-jovem-f.png')
            }
            else if (idade < 50){
                //adulto
                imagem.setAttribute('src','fotos/foto-adultp-f.png')
            }
            else{
                //idoso
                imagem.setAttribute('src','fotos/foto-idoso-f.png')
            }
        }
        else{
            var sexo = 'masculino'
            if(idade > 0 && idade <= 10){
                //criança
                imagem.setAttribute('src','fotos/foto-bebe-m.png')
            }
            else if(idade <= 20 ){
                //jovem
                imagem.setAttribute('src','fotos/foto-jovem-m.png')
            }
            else if (idade < 50){
                imagem.setAttribute('src','fotos/foto-adulto-m.png')
                //adulto
            }
            else{
                imagem.setAttribute('src','fotos/foto-idoso-m.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é do sexo ${sexo}.`
        res.appendChild(imagem)
    }
}