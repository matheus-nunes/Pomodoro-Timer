import Controls from './controls.js'
import Timer from './timer.js'
import Audios from './audios.js'

// TRABALHANDO COM A DOM

/*a pra nós utilizarmos a DOM 
basta colocar document.querySelector
 isso permite que pegamos alguma propriedade do html
 */

/*a baixo estamos atribuindo o a classe play e pause a uma variavel*/
let play = document.querySelector('.play')
let mais = document.querySelector('.mais')
let menos = document.querySelector('.menos')
let set = document.querySelector('.set')
let stop = document.querySelector('.stop')

let chuva = document.querySelector('.chuva')
let cafeteria = document.querySelector('.cafeteria')
let lareira = document.querySelector('.lareira')
let floresta = document.querySelector('.floresta')

let minutoSpan = document.querySelector('.minutos')
let secondSpan = document.querySelector('.segundos')

let dark = document.querySelector('.dark')
let light = document.querySelector('.light')

let container = document.querySelector('.container')

let mode = document.querySelector('.mode')

const minutoInicio = document.querySelector('.minutos').textContent
console.log(minutoInicio)
let minutes = Number(minutoSpan.textContent)
let seconds
let timerOut

const controls = Controls({
  play,
  set,
  stop
})

const timer = Timer({
  minutoSpan,
  secondSpan,
  timerOut,
  minutoInicio,
  seconds,
  minutes,
  resetarControle: controls.resetarControles
})

const audios = Audios({
  chuva,
  cafeteria,
  lareira,
  floresta
})

play.addEventListener('click', function () {
  controls.player()
  timer.countdow()
  audios.pressAudio()
})

stop.addEventListener('click', function () {
  timer.resetTimer()

  set.classList.remove('hide')
  stop.classList.add('hide')
})
mais.addEventListener('click', function () {
  minutes = minutes + 5
  minutoSpan.textContent = minutes
})
menos.addEventListener('click', function () {
  if (minutes > 5) {
    minutes = minutes - 5
    minutoSpan.textContent = minutes
  }
})

chuva.addEventListener('click', function () {
  audios.pararMusiquinha()
  audios.Mchuva()
  audios.tocarMusiquinha()
  cafeteria.classList.remove('ativado')

  if (chuva.classList == 'chuva ativado') {
    chuva.classList.remove('ativado')
    audios.pararMusiquinha()
  } else {
    chuva.classList.add('ativado')
    console.log(chuva)
  }

  floresta.classList.remove('ativado')
  lareira.classList.remove('ativado')
})
cafeteria.addEventListener('click', function () {
  audios.pararMusiquinha()
  audios.Mcafeteria()
  audios.tocarMusiquinha()
  if (cafeteria.classList == 'cafeteria ativado') {
    cafeteria.classList.remove('ativado')
    audios.pararMusiquinha()
  } else {
    cafeteria.classList.add('ativado')
  }
  chuva.classList.remove('ativado')
  floresta.classList.remove('ativado')
  lareira.classList.remove('ativado')
})
lareira.addEventListener('click', function () {
  audios.pararMusiquinha()
  audios.Mlareira()
  audios.tocarMusiquinha()
  cafeteria.classList.remove('ativado')
  chuva.classList.remove('ativado')
  floresta.classList.remove('ativado')
  if (lareira.classList == 'lareira ativado') {
    lareira.classList.remove('ativado')
    audios.pararMusiquinha()
  } else {
    lareira.classList.add('ativado')
  }
})
floresta.addEventListener('click', function () {
  audios.pararMusiquinha()
  audios.Mfloresta()
  audios.tocarMusiquinha()
  cafeteria.classList.remove('ativado')
  chuva.classList.remove('ativado')
  if (floresta.classList == 'floresta ativado') {
    floresta.classList.remove('ativado')
    audios.pararMusiquinha()
  } else {
    floresta.classList.add('ativado')
  }
  lareira.classList.remove('ativado')
})

dark.addEventListener('click', function () {
  mode.classList.add('brilho-mode')
  mode.classList.remove('dark-mode')

  light.classList.remove('hide')
  dark.classList.add('hide')

  container.classList.add('light')
})
light.addEventListener('click', function () {
  mode.classList.remove('brilho-mode')
  mode.classList.add('dark-mode')

  dark.classList.remove('hide')
  light.classList.add('hide')
  container.classList.remove('light')
})

/*FUNÇÃO PARA ALTERAR OS SEGUNDOS E MINUTOS*/
set.addEventListener('click', function () {
  minutes = prompt('Quantos Minutos ? ') || 0

  timer.atualizarDisplay(minutes, 0)
})
