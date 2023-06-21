import { ACTIONS } from './actions'

export const CalculatorReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }

    case ACTIONS.RESET:
      return {
        ...state,
        bill: 0,
        percentage: 0,
        numPeople: 0
      }

    default:
      return state
  }
}
