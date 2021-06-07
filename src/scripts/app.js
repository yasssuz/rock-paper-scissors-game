import { getQuery, getAllQuery } from './utils'
import { handleRules } from './rulesHandler'

getAllQuery('.rules-button').forEach(button =>
  button.addEventListener('click', handleRules)
)