import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../context/ContexProvider';

const Cart = () => {
  const { handleUnclick } = useStateContext();
  return (
    <div className='w-screen bg-half-transparent fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-80'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Shopping Cart
          </p>
          <button className='text-2xl rounded-full p-2 hover:drop-shadow-md hover:bg-light-gray'
            type='butten' onClick={() => handleUnclick('cart')} style={{ color: 'rgb(153, 171, 180)' }}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className='border-color border-t-1 pt-10 text-center'>
          <p className='text-xl font-semibold text-red-400'>Cart is empety</p>
        </div>
      </div>
    </div>
  )
}

export default Cart