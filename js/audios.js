export default function Audios({ chuva, cafeteria, lareira, floresta }) {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const chuval = new Audio('/soms/Chuva.wav')
  const cafeterial = new Audio('https://github.com/matheus-nunes/Pomodoro-Timer/raw/3beceb9333dd0093b60d787cc7829526ff68dc36/soms/Cafeteria.wav')
  const florestal = new Audio('/soms/Floresta.wav')
  const lareiral = new Audio('/soms/Lareira.wav')

  let som
  let volume_chuva = document.querySelector('.volume-chuva')
  let volume_floresta = document.querySelector('.volume-floresta')
  let volume_lareira = document.querySelector('.volume-lareira')
  let volume_cafeteria = document.querySelector('.volume-cafeteria')

  function Mchuva() {
    som = chuval
  }
  function Mfloresta() {
    som = florestal
  }
  function Mcafeteria() {
    som = cafeterial
  }
  function Mlareira() {
    som = lareiral
  }

  volume_cafeteria.addEventListener('change', function () {
    cafeterial.volume = volume_cafeteria.value
  })
  volume_lareira.addEventListener('change', function () {
    lareiral.volume = volume_lareira.value
  })
  volume_floresta.addEventListener('change', function () {
    florestal.volume = volume_floresta.value
  })
  volume_chuva.addEventListener('change', function () {
    chuval.volume = volume_chuva.value
  })

  function pressAudio() {
    buttonPressAudio.play()
  }

  function finalTempo() {
    kitchenTimer.play()
  }

  function tocarMusiquinha() {
    som.play()
  }

  function pararMusiquinha() {
    if (
      som == lareiral ||
      som == cafeterial ||
      som == florestal ||
      som == chuval
    ) {
      som.pause()
    }
  }

  return {
    pressAudio,
    finalTempo,
    tocarMusiquinha,
    pararMusiquinha,
    Mchuva,
    Mfloresta,
    Mcafeteria,
    Mlareira
  }
}
