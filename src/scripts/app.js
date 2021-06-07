import { getQuery, getAllQuery } from './utils'
import { handleRules } from './rulesHandler'
import { handleGame } from './gameHandler'
import { getScore, updateScoreDOM } from './scoreHandler'

getAllQuery('.rules-button').forEach(button =>
  button.addEventListener('click', handleRules)
)

getAllQuery('.game__picker-outside').forEach(picker =>
  picker.addEventListener('click', handleGame)
)

window.addEventListener('load', () => {
  const score = getScore()
  console.log('hello')

  updateScoreDOM(score)
})