import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Resize, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-6 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent height="650px" id="calendar" eventSettings={{ dataSource: scheduleData }} selectedDate={new Date(2021, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar