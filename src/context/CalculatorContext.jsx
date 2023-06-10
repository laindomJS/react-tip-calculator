import { createContext, useReducer } from 'react'
import { CalculatorReducer } from './CalculatorReducer'
import { ACTIONS } from './actions'

export const CalculatorContext = createContext(null)

export const CalculatorProvider = ({ children }) => {
  const initialState = {
    bill: 0.00,
    percentage: 0,
    numPeople: 0
  }

  const [state, dispatch] = useReducer(CalculatorReducer, initialState)

  const setBill = (bill) => {
    dispatch({ type: ACTIONS.SET_BILL, payload: bill })
  }

  const setPercentage = (percentage) => {
    dispatch({ type: ACTIONS.SET_PERCENTAGE, payload: percentage })
  }

  const setNumPeople = (numPeople) => {
    dispatch({ type: ACTIONS.SET_NUM_PEOPLE, payload: numPeople })
  }

  const setReset = () => {
    dispatch({ type: ACTIONS.RESET })
  }

  return (
    <CalculatorContext.Provider value={{
      bill: state.bill,
      percentage: state.percentage,
      numPeople: state.numPeople,
      setBill,
      setPercentage,
      setNumPeople,
      setReset
    }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
