'use strict'

export default function gameFactory(initialGameState) {
  function getState() {
    return initialGameState
  }

  function onClick(index) {
    initialGameState[index].isActive = true
  }

  return {
    getState,
    onClick
  }
}
