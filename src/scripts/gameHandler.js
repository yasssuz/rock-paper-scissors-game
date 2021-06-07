import { handleScore } from "./scoreHandler"

export function handleGame(picker) {
  const pickersArr = [
    'scissors',
    'paper',
    'rock',
  ]
  const randomIndex = Math.floor(Math.random() * pickersArr.length)
  const computerPicker = pickersArr[randomIndex]
  const playerPicker = picker.target.id
  const result = getGameResult(playerPicker, computerPicker)

  handleScore(result)
}

function getGameResult(playerP, computerP) {
  if (playerP === computerP) {
    return 'draw'
  } else if (playerP === 'rock' && computerP === 'scissors') {
    return 'won'
  } else if (playerP === 'paper' && computerP === 'rock') {
    return 'won'
  } else if (playerP === 'scissors' && computerP === 'paper') {
    return 'won'
  } else {
    return 'lost'
  }
}
