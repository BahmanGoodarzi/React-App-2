import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Selection, Sort, Filter, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-6 md:p-10 mt-16 md:mt-2 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent Toolbar={['Delete']} editSettings={{ allowDeleting: true, allowEditing: true }} width="auto" dataSource={customersData} allowPaging allowSorting>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers