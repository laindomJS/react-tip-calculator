import { ACTIONS } from './actions'

export const CalculatorReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_BILL:
      return {
        ...state,
        bill: action.payload
      }

    case ACTIONS.SET_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload
      }

    case ACTIONS.SET_NUM_PEOPLE:
      return {
        ...state,
        numPeople: action.payload
      }

    case ACTIONS.RESET:
      return {
        ...state,
        bill: 0,
        percentage: 0,
        numPeople: 1
      }

    default:
      return state
  }
}
