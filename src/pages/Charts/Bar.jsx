import React from 'react';
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';


const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-6 md:p-10 bg-white rounded-3xl'>
      <Header category="Chart" title="Inflation Bar" />
      <BulletChartComponent id='ranges' animation={{ enable: false }} height="400" valueField='value' targetField='comparativeMeasureValue' categoryField='category' title='Profit in %' minimum={0} maximum={20} interval={5} tooltip={{ enable: true }} dataSource={[{ value: 5, comparativeMeasureValue: 7.5, category: '2001' },
      { value: 7, comparativeMeasureValue: 5, category: '2002' },
      { value: 10, comparativeMeasureValue: 6, category: '2003' },
      { value: 5, comparativeMeasureValue: 8, category: '2004' },
      { value: 12, comparativeMeasureValue: 5, category: '2005' },
      { value: 8, comparativeMeasureValue: 6, category: '2006' },]}>
        <BulletRangeCollectionDirective>
          <BulletRangeDirective end={5}></BulletRangeDirective>
          <BulletRangeDirective end={15}></BulletRangeDirective>
          <BulletRangeDirective end={20}></BulletRangeDirective>
        </BulletRangeCollectionDirective>

      </BulletChartComponent>
    </div>
  )
}

export default Bar