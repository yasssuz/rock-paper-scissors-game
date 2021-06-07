import { getQuery } from "./utils"

export function handleScore(result) {
  let score = Number(getScore())
  console.log(result)

  if (result === 'draw') {
    return
  } else if (result === 'won') {
    score = score + 1
  } else {
    score = score - 1
  }

  if (score < 0) {
    score = 0
  }

  updateScoreStorage(String(score))
  updateScoreDOM(score)
}

export function updateScoreDOM(score) {
  return getQuery('.progress__score h1').textContent = score
}

function updateScoreStorage(score) {
  return localStorage.setItem('score', score)
}

export function getScore() {
  const numReg = /^-?[\d.]+(?:e-?\d+)?$/
  let score;

  if (localStorage.getItem('score') === null || !localStorage.getItem('score').match(numReg)) {
    localStorage.setItem('score', '0')
    score = '0'
  } else {
    score = localStorage.getItem('score')
  }

  return score
}