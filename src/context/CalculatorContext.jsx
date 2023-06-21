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

  const handleInput = e => {
    const field = e.target.name
    const value = parseFloat(e.target.value)

    dispatch({
      type: ACTIONS.SET_FIELD,
      payload: {
        field,
        value
      }
    })
  }

  const setReset = () => {
    dispatch({ type: ACTIONS.RESET })
  }

  return (
    <CalculatorContext.Provider value={{
      bill: state.bill,
      percentage: state.percentage,
      numPeople: state.numPeople,
      handleInput,
      setReset
    }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
