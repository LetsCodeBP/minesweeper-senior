'use strict'

import test from 'ava'
import {getNeighborIndexes, generateMap, randomFromList, randomsFromRange} from './random-bomb.js'

test('select the last', t => {
  const {selected, rest} = randomFromList([1,2,3,4,5], 0.9)
  t.deepEqual(rest, [1,2,3,4])
  t.is(selected, 5)
})

test('select the first', t => {
  const {selected, rest} = randomFromList([1,2,3,4,5], 0.1)
  t.deepEqual(rest, [2,3,4,5])
  t.is(selected, 1)
})

test('randoms form range', t => {
  const randoms = randomsFromRange(25, 5, () => 0)
  t.deepEqual(randoms, [0, 1, 2, 3, 4])
})

test('generate empty', t => {
  const map = generateMap({width: 3, height: 2, bombs: []});
  t.deepEqual(map, [0,0,0,0,0,0])
})

test.skip('generate empty', t => {
  const map = generateMap({width: 3, height: 3, bombs: [4]});
  t.deepEqual(map, [1,1,1,
                    1,9,1,
                    1,1,1])
})

test('get neighbours from middle of a line', t => {
  const neighbours = getNeighborIndexes(1, 1, 3)
  t.deepEqual(neighbours, [0, 2])
})

test('get neighbours from begining of a line', t => {
  const neighbours = getNeighborIndexes(0, 1, 3)
  t.deepEqual(neighbours, [1])
})
