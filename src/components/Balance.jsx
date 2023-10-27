import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(item => item.amount)
    const balance = amount.reduce((total, item) => total+=item, 0).toFixed(2)
    console.log(balance)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>Rs.{balance}</h1>
        </>
    )
}