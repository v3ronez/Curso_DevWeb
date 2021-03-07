function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reverse = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reverse ? corpo : borda)
    this.elemento.appendChild(reverse ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

function parDeBarreiras(altura, abertura, posicaoX) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = posicaoX => this.elemento.style.left = `${posicaoX}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(posicaoX)
}

// const b = new parDeBarreiras(550, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3),
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando elemento sair da tela
            if (par.getX() < - par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzarMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            // cruzarMeio && notificarPonto()
            if (cruzarMeio) notificarPonto()
        })
    }
}

function Clown(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'palhaco')
    this.elemento.src = 'imgs/clown.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMax = alturaJogo - this.elemento.clientHeigth

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMax) {
            this.setY(alturaMax)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)
}

// const areaDoJogo = document.querySelector('[wm-flappy]')
// // const altura = areaDoJogo.clientHeight
// const barreiras = new Barreiras(550, 1200, 200, 400)
// const palhaco = new Clown(400)

// areaDoJogo.appendChild(palhaco.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     palhaco.animar()
// }, 20)

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientReact()
    const b = elementoB.getBoundingClientReact()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function Bateu(palhaco, barreiras) {
    let bateu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!bateu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            bateu = estaoSobrepostos(palhaco.elemento, superior)
                || estaoSobrepostos(palhaco.elemento, inferior)

        }
    })
}
function FlappyClown() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))

    const palhaco = new Clown(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(palhaco.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            palhaco.animar()

            if (Bateu(palhaco, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}
new FlappyClown().start()