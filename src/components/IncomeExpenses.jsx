import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)

  const amount = transactions.map(item => item.amount)
  const income = amount.filter(item => item > 0).reduce((total, item) =>  item>=0?total+=item:total+=0, 0).toFixed(2)
  const expense = amount.filter(item => item < 0).reduce((total, item) =>  item<0?total+=item:total+=0, 0)

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className='money plus'>+Rs.{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>-Rs.{Math.abs(expense).toFixed(2)}</p>
        </div>
    </div>
  )
}
