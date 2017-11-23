'use strict'

export function randomFromList(list, random) {
  const index = Math.floor(random * list.length)
  const rest = [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
  return {
    rest,
    selected: list[index]
  }
}

export function randomsFromRange(rangeMax, length, randomGen) {
  const initalAcc = {rest: range(rangeMax), selected: []}
  return Array.from({length}, randomGen)
    .reduce(selectOneFromList, initalAcc)
    .selected
}

function selectOneFromList(acc, random) {
  const {rest, selected} = randomFromList(acc.rest, random)
  return {
    rest,
    selected: [...acc.selected, selected]
  }
}

function range(length) {
  return Array.from({length}, (e, i) => i)
}

export function generateMap({width, height, bombs}) {
  return Array.from({length: width * height}, () => 0)
    .map((e, i) => {
      const neighbors = getNeighborIndexes(i, width, height)
      return neighbors.filter(tile => bombs.includes(tile)).length
    })
}

export function getNeighborIndexes(i, width, height) {
  return [i - 1, i + 1].filter(e => e >= 0)
}
