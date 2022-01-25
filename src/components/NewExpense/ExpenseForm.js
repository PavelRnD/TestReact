import './ExpenseForm.css';

const ExpenseForm =()=>{
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>text</label>
                    <input type="text"></input>
                </div>
                <div className="new-expense__control">
                    <label>number</label>
                    <input type="number"></input>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;