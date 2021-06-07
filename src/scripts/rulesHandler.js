import { getQuery } from './utils'

export function handleRules() {
  return getQuery('.rules-overlay').classList.toggle('active')
}