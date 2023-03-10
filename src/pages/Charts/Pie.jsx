import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Selection, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

const Pie = () => {
  const data = [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 }
  ];
  const color1 = ['#F9D422'];
  const color2 = ['#F28F3F'];
  const color3 = ['#E94F53'];
  return (
    <div className='m-4 md:m-10 mt-24 p-6 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent id='charts' style={{ textAlign: "center" }} selectionMode='Point' primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C'
      }} title="USA CLIMATE - WEATHER BY MONTH" chartArea={{ border: { width: 0 } }} legendSettings={{
        mode: 'Range',
        visible: true,
        toggleVisibility: false
      }}>
        <Inject services={[ColumnSeries, Selection, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} name='USA' xName='x' yName='y' type='Column' animation={{ enable: false }} cornerRadius={{
            topLeft: 10, topRight: 10
          }}>
          </SeriesDirective>
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          <RangeColorSettingDirective label="1°C to 10°C" start={1} end={10} colors={color1}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="11°C to 20°C" start={11} end={20} colors={color2}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="21°C to 30°C" start={21} end={30} colors={color3}></RangeColorSettingDirective>
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>)
}

export default Pie