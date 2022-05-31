export default function Controls({ play, stop, set }) {
  function player() {
    //a baixo estamos pegando a lista de classe e adicionando e removendo classes

    stop.classList.remove('hide')
    set.classList.add('hide')
  }

  function resetarControles() {
    play.classList.remove('hide')
    set.classList.remove('hide')
    stop.classList.add('hide')
  }

  return {
    resetarControles,
    player
  }
}
