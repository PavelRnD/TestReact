import React,{useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props)
{

    const [selectedYear,setSelectedYear] = useState('2020');
   
 

   const SelectedChangedHandler = (_selectedYear)=>{
      setSelectedYear(_selectedYear);
    
   };

    return (
        <Card className='expenses'>
        <ExpensesFilter selected = {selectedYear}  onSelectedChanged={SelectedChangedHandler}></ExpensesFilter>
        { props.Data.map( (expense) => (
            <ExpenseItem 
                key = {expense.id}
                date = {expense.date}
                name = {expense.title}
                amount = {expense.amount}
            /> 
        ))}
        
        </Card>);
};
export default Expenses;