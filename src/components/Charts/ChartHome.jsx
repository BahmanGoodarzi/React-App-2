import React from 'react';
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';


const ChartHome = () => {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    const primaryxAxis = { valueType: 'Category' };
    return (
        <ChartComponent id='charts' height='150px' background='#f6fff8' primaryXAxis={primaryxAxis}>
            <Inject services={[ColumnSeries, Legend, LineSeries, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales' />
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default ChartHome