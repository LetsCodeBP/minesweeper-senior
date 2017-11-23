'use strict'

export default function domFactory({rootElement, game}) {
  function init() {
    rootElement.addEventListener('click', onClick)
    render()
  }

  function render() {
    rootElement.innerHTML = ''
    game.getState().forEach(tile => {
      const button = document.createElement('button')
      button.innerText = getTileChar(tile)
      rootElement.appendChild(button)
    })
  }

  function onClick(e) {
    const index = [...rootElement.children].indexOf(e.target)
    game.onClick(index)
    render(rootElement, game)
  }

  function getTileChar({isActive, value}) {
    return isActive ? value : '?'
  }

  return {
    render,
    init
  }
}
