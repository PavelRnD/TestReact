import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props)
{
    return (
        <Card className='expense-item'>
          <ExpenseDate Date = {props.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>{props.amount} р</div>
            </div>
        </Card>);
};
export default ExpenseItem;