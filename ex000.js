function horas(){
    var data = new Date()
    var hora = data.getHours()
    var res = document.getElementById('res')
    var img = document.getElementById('rep')
    res.innerHTML = `Agora são ${hora} horas`
    if (hora <= 12){
    img.innerHTML = `<img id="imgs"src="imagem/manha.jpg" alt="manha">`
    document.body.style.background = '#db9601c4'
    }else if(hora < 18){
        img.innerHTML = `<img id="imgs"src="imagem/tarde.jpg" alt="manha">`
        document.body.style.background = '#dd5e0ac2'
    }else{
        img.innerHTML = `<img id="imgs"src="imagem/noite.jpg" alt="noite">`
        document.body.style.background = '#030b52cb'
    }
}
