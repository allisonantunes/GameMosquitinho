var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){

    criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){

    criaMosquitoTempo = 1000

}else if(nivel === 'hardcore'){
    criaMosquitoTempo = 750
}
console.log(nivel)


function ajustaPalco(){
altura = window.innerHeight
largura = window.innerWidth
}
ajustaPalco()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)

function posicaoRandomica() {
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas >3){
            window.location.href = 'fimDeJogo.html'
        }else{
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
            vidas++
        }
        
    }

    var posicaoX = Math.floor(Math.random() * largura) - 110
    var posicaoY = Math.floor(Math.random() * altura) - 110
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX


    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function iniciarJogo(){
    var nivel = document.getElementById('nivel').value
    if(nivel ===''){
        alert('Selecione um nível para Jogar !')
        return false
    }
    window.location.href = 'app.html?' + nivel
}