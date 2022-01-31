import React,{useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
        <ExpensesList expenses={filteredExpenses}></ExpensesList>       
        </Card>);
};
export default Expenses;