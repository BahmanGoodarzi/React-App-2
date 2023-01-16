import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../context/ContexProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } = useStateContext();

  return (
    <div className='w-screen bg-half-transparent fixed nav-item top-12 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-96'>

        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Settings
          </p>
          <button className='text-2xl rounded-full p-2 hover:drop-shadow-md hover:bg-light-gray'
            type='butten' onClick={() => setThemeSettings(false)} style={{ color: 'rgb(153, 171, 180)' }}>
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-color border-t-1 p-4 ml-4'>
          <p className='font-semibold text-md'>
            Theme Options
          </p>
          <div className='mt-4'>
            <input type="radio" name="theme" value="Light" className="cursor-pointer" id="light"
              checked={currentMode === "Light"} onChange={setMode} />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input type="radio" name="theme" value="Dark" className="cursor-pointer" id="dark"
              checked={currentMode === "Dark"} onChange={setMode} />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        <div className='flex-col border-color border-t-1 p-4 ml-4'>
          <p className='font-semibold text-md'>
            Theme Color
          </p>
          <div className='mt-3 flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className='flex items-center relative mt-2 cursor-pointer gap-5'>
                  <button type='butten' className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }} onClick={() => setColor(item.color)}>
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings