import "./ExpenseDate.css";

function ExpenseDate(props)
{
    const month  = props.Date.toLocaleDateString("ru-Ru",{month: 'long'});
    const day  = props.Date.toLocaleDateString("ru-Ru",{month: '2-digit'});
    const year  = props.Date.getFullYear();

    return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
               
            </div>
    );
};
export default ExpenseDate;