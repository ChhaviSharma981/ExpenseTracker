import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)  

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random()*1000),
            text: text,
            amount: +amount
        }


        addTransaction(newTransaction)
    }

  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Income/expense</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your Expense/Income'/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='' />
            </div>
            <button className='btn'><b>Add transaction</b></button>
        </form>
    </div>
  )
}
