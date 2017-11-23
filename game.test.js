'use strict'

import test from 'ava'
import gameFactory from './game.js'

test('get game state', t => {
  const game = gameFactory([])
  const state = game.getState()
  t.deepEqual(state, [])
})

test('get initial game state', t => {
  const game = gameFactory([{}])
  const state = game.getState()
  t.deepEqual(state, [{}])
})

test('active tile on click', t => {
  const game = gameFactory([{isActive: false}])
  game.onClick(0)
  const state = game.getState()
  t.is(state[0].isActive, true)
})

