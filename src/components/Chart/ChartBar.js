import './ChartBar.css'

const ChartBar = props =>{

    let bar_fill = '0%';
    if(props.maxValue>0){
        bar_fill = Math.round(props.value/props.maxValue* 100)+'%';
    }
    console.log(props);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:bar_fill}}>

                </div>
            </div>
            <div className='chart-bar__label'>
                {props.label}
            </div>
        </div>
    );
}
export default ChartBar
