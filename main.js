'use strict'

import domFactory from './render.js'
import gameFactory from './game.js'

let gameState = [{
  x: 0,
  y: 0,
  value: 0,
  isActive: false 
}, {
  x: 1,
  y: 0,
  value: 1,
  isActive: false 
}, {
  x: 2,
  y: 0,
  value: 1,
  isActive: false 
}, {
  x: 0,
  y: 1,
  value: 0,
  isActive: false 
}, {
  x: 1,
  y: 1,
  value: 1,
  isActive: false 
}, {
  x: 2,
  y: 1,
  value: 9,
  isActive: false 
}]

const rootElement = document.querySelector('.game-root')
const game = gameFactory(gameState)
const dom = domFactory({game, rootElement})
dom.init()
