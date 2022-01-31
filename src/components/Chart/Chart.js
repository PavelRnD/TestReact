import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props=>{

    const arrValues = props.dataPoints.map(point => { return point.value});
    const maxValue = Math.max(...arrValues);
    console.log(maxValue);

    return(
        <div className='chart'>
            {
                props.dataPoints.map((point)=>
                (
                    <ChartBar
                        value = {point.value}
                        label = {point.label}
                        key ={point.label}
                        maxValue = {maxValue}
                    ></ChartBar>
                ))
            }
        </div>
    )
}

export default Chart