import React from 'react';
import { Header } from '../../components';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';

const ColorMapping = () => {
  const data = [
    { x: 'Saudi Arabia', y: 58, text: '58%' },
    { x: 'Persian Gulf', y: 15, text: '15%' },
    { x: 'Canada', y: 13, text: '13%' },
    { x: 'Venezuela', y: 8, text: '8%' },
    { x: 'Mexico', y: 3, text: '3%' },
    { x: 'Russia', y: 2, text: '2%' },
    { x: 'Miscellaneous', y: 1, text: '1%' }
  ];
  const legendSettings = { visible: true };
  return (
    <div className='m-4 md:m-10 mt-24 p-6 md:p-10 bg-white rounded-3xl'>
      <Header category="Color Map" title="Inflation Color Map" />
      <AccumulationChartComponent id='charts' legendSettings={legendSettings} title='Oil and other liquid imports in USA'>
        <Inject services={[AccumulationLegend]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' dataLabel={{
            visible: true,
            name: 'text',
            font: {
              fontWeight: '600'
            }
          }}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default ColorMapping