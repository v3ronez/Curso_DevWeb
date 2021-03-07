(function ($) {
    $.fn.temporizador = function (param) {
        const paramFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, param)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(paramFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(paramFinais.horario)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const difeEmMili = alvo.getTime() - agora.getTime()
            if (difeEmMili >= 0) {
                const diferenca = regex.exec(new Date(difeEmMili).toISOString())
                // console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)
        return this
    }
})(jQuery)




// const timerX = [     
//     horaDezena =  $('<span class="digito">').html('0'),
//     horaUnidade = $('<span class="digito">').html('0'),
//     separadorHora = $('<span class="separador">').html(':'),
//     minutoDezena = $('<span class="digito">').html('0'),
//     minutoUnidade = $('<span class="digito">').html('0'),
//     separadorMinuto = $('<span class="separador">').html(':'),
//     segundoDezena = $('<span class="digito">').html('0'),
//     segundoUnidade = $('<span class="digito">').html('0'),
//     mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
// ]

// timerX.forEach(relogio => relogio)
     
//  //console.log(timerX)
//    $(this).addClass('temporizador')
//    $(this).append(timerX)