import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

  return (
    <div>
        <h4>History</h4>
        <ul className='list'>
          { transactions?.map((item) => (
            <Transaction transaction={item} key={item.id} />
          )) }
            
        </ul>
    </div>
  )
}
