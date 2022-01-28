import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{

    const saveExpenseHandler = expensedata =>{
        props.onAddExpense(expensedata);
    }; 

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense ={saveExpenseHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;