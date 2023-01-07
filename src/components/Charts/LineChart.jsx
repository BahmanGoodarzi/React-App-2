import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, LineSeries, Inject, DateTime, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContexProvider';

const LineChart = () => {
  const { currentMode } = useStateContext;
  return (
    <ChartComponent id='line-chart' height='420px' tooltip={{ enable: true }}
      background="#ced4da"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}>
      <Inject services={[DateTime, Tooltip, LineSeries, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart