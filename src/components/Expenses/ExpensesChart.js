import Chart from "../Chart/Chart";


const ExpensesChart = props =>{
    
    const chartDataPoints = [
        {label :'янв', value :0},
        {label :'фев', value :0},
        {label :'мар', value :0},
        {label :'апр', value :0},
        {label :'май', value :0},
        {label :'июн', value :0},
        {label :'июль', value :0},
        {label :'авг', value :0},
        {label :'сен', value :0},
        {label :'окт', value :0},
        {label :'ноя', value :0},
        {label :'дек', value :0}
    ]
    
    for(const expense of props.expenses ){
        const expenseMonth =expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    
    
    return (<Chart dataPoints= {chartDataPoints}></Chart>)
}

export default ExpensesChart