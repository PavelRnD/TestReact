import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props)
{
    return (
        <Card className='expense-item'>
          <ExpenseDate Date = {props.Date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.Name}</h2>
                <div className='expense-item__price'>{props.Amount} р</div>
            </div>
        </Card>);
};
export default ExpenseItem;