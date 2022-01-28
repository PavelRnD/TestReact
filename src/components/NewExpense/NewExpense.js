import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{

    const saveExpenseHandler = expensedata =>{
        const _id = Math.round(Math.random()*100).toString(16);
        const newExpense = {...expensedata, id:_id}
        props.onAddExpense(newExpense);
    }; 

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense ={saveExpenseHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;