import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props)
{

   

    return (
        <div className='expenses'>
         <ExpenseItem 
            Date = {props.Data[0].date}
            Name = {props.Data[0].title}
            Amount = {props.Data[0].amount}
            >
        </ExpenseItem>
        <ExpenseItem 
            Date = {props.Data[1].date}
            Name = {props.Data[1].title}
            Amount = {props.Data[1].amount}
            >
        </ExpenseItem>
        <ExpenseItem 
            Date = {props.Data[2].date}
            Name = {props.Data[2].title}
            Amount = {props.Data[2].amount}
            >
        </ExpenseItem>
        </div>);
};
export default Expenses;