import React,{useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props)
{

    const [filteredYear,setSelectedYear] = useState('2020');
   
 

   const SelectedChangedHandler = (_selectedYear)=>{
      setSelectedYear(_selectedYear);
      
   };

   const filteredExpenses = props.date.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
        <Card className='expenses'>
        <ExpensesFilter selected = {filteredYear}  onSelectedChanged={SelectedChangedHandler} ></ExpensesFilter>
        { filteredExpenses.map( (expense) => (
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