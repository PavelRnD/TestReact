import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';



function ExpensesList(props){
    if(props.expenses.length === 0)
    {
        return ( <h2 className='expenses-list__fallback'>no items</h2>);        
    }



    return (
        <ul className='expenses-list'>
        { 
            props.expenses.map( (expense) => (
            <ExpenseItem 
                key = {expense.id}
                date = {expense.date}
                name = {expense.title}
                amount = {expense.amount}
            /> 
        ))}
        </ul>
    );
};

export default ExpensesList
