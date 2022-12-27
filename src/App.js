import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

import { Navbar, Footer, sidebar, ThemeSetting, Sidebar } from './components';
import { Ecommerce, Orders, Line, Pie, Pyramid, Area, Kanban, Stacked, Customers, Financial, Calendar, Employees, Bar, ColorMapping, ColorPicker, Editor} from './pages';

import { useStateContext } from './context/ContexProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return(
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button className='text-2xl hover:drop-shadow-xl hover:bg-light-gray p-3 text-white' style={{background: "blue", borderRadius: "50%"}} type='button'>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar />
            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} /> 

              {/* apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default App