import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, SplineAreaSeries, Inject, DateTime } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContexProvider';
import { Header } from '../../components';

const Area = () => {
  const { currentMode } = useStateContext;
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Percentage" />
      <ChartComponent id='area-chart' height='420px' tooltip={{ enable: true }}
        background={currentMode === "Drak" ? "#343a40" : "#fff"}
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}>
        <Inject services={[DateTime, SplineAreaSeries, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area